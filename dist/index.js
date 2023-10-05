/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 272:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 347:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(272);
const github = __nccwpck_require__(347);

core.info("workflow started....");

const github_token = core.getInput("GITHUB_TOKEN", { required: true });

const issue_msg = core.getInput("issue_msg", { required: false });
const PR_msg = core.getInput("PR_msg", { required: false });
const allow_owner = core.getInput("allow_owner", { required: false });

const context = github.context;

const author = context.payload.sender.login;
const repoOwner = context.payload.repository.owner.login;

if (!allow_owner || allow_owner == "false") {
  if (author.includes("[bot]") || author === repoOwner) {
    core.info("Avoiding issues/PR opened by bot/repo owner....");
    process.exit(0);
  }
}

async function getRandomJoke() {
  const url = "https://github-readme-jokes.vercel.app/api";
  try {
    core.info(url);
    var html = `\n<div><img alt=joke src=${url} width=500px ></div>\n`;
    return html;
  } catch (err) {
    core.setFailed(`Error:${err.message}`);
    core.info(`Error in getting a joke: ${err.message}`);
    return "";
  }
}

async function run(joke) {
  try {
    var event = github.context.eventName;
    var greetMsg;
    if (event === "pull_request" || event === "pull_request_target") {
      if (!PR_msg) {
        message =
          "Hi, {{author}}, \nThanks for opening this PR :blue_heart: .\nContributors :people_holding_hands:  like you make the open source community :earth_africa:  such an amazing place to learn :book: , inspire :angel:, and create :art: .\nWe will review it :eyes: and get back to you as soon as possible :+1: . Just make sure you have followed the contribution guidelines.\n\nBy that time enjoy this joke :point_down: , hope you like it :smile:\n{{joke}}";
        core.debug("PR msg not set, appying default");
      } else {
        message = PR_msg;
        core.debug("PR msg is set");
      }
    } else if (event === "issues") {
      if (!issue_msg) {
        message =
          "Hi, {{author}}, \nThanks for your contribution :blue_heart: .\nContributors :people_holding_hands:  like you make the open source community :earth_africa:  such an amazing place to learn :book: , inspire :angel:, and create :art: .\nWe will investigate :eyes:  and get back to you as soon as possible :+1: . Just make sure you have given us sufficient information :information_source:.\n\nBy that time enjoy this joke :point_down: , hope you like it :smile:\n{{joke}}";
        core.debug("issue msg not set, applying default message");
      } else {
        message = issue_msg;
        core.debug("Issuer msg is set");
      }
    }

    core.info(`Running on ${event}......`);

    // console.log(`eventname: ${github.context.eventName}`)
    // console.log(`payload sender: ${JSON.stringify(github.context.payload.sender, undefined, 2)}`)
    // console.log(`workflow: ${github.context.workflow}`)
    // console.log(`payload: ${JSON.stringify(github.context.payload, undefined, 2)}`)

    var issueNumber;
    if (event === "pull_request" || event === "pull_request_target") {
      issueNumber = context.payload.pull_request.number;
    } else if (event === "issues") {
      issueNumber = context.payload.issue.number;
    }

    const octokit = github.getOctokit(github_token);

    core.info(`got this joke: ${joke}`);
    core.info("commenting...");
    var messageBody = message
      .replace("{{author}}", "@" + author)
      .replace("{{joke}}", joke);
    messageBody =
      messageBody +
      "\n\nUse [this action](https://github.com/ivan-developer-01/jokes-on-issues-action) on your projects.";

    const comment = await octokit.issues.createComment({
      issue_number: issueNumber,
      owner: context.payload.repository.owner.login,
      repo: context.payload.repository.name,
      body: messageBody,
    });
    core.setOutput("comment-url", comment.data.html_url);
  } catch (error) {
    core.setFailed(error.message);
  }
}

getRandomJoke()
  .then((data) => {
    core.info(`joke: ${data}`);
    run(data);
  })
  .catch((err) => {
    core.setFailed(`Error: ${err}`);
  });

})();

module.exports = __webpack_exports__;
/******/ })()
;