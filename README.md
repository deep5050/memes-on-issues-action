![jokes-on-issues-action](https://socialify.git.ci/ivan-developer-01/jokes-on-issues-action/image?description=1&descriptionEditable=Greet%20the%20issue%20raiser%20with%20a%20customizable%20message%20and%20a%20bonus%20programming%20joke%20&font=KoHo&forks=1&issues=1&language=1&owner=1&pattern=Brick%20Wall&pulls=1&stargazers=1&theme=Light)


<!-- ## [See demo](https://github.com/deep5050/jokes-on-issues-action/issues/1#issuecomment-728134188) -->
<!-- ![demo](https://user-images.githubusercontent.com/27947066/99762392-6812ae00-2b1e-11eb-9e7f-e2040ed0a843.png) -->

## [subscribe to service updates](https://github.com/deep5050/jokes-on-issues-action/issues/2)
## How to use

Create a file `.github/workflows/joke.yml` with the following content

```yaml
name: "Greet With A Random Joke"
on:
  issues:
    types: [opened, reopened]

jobs:
  test:
    name: setup environment
    runs-on: ubuntu-latest
    steps:
      - name: jokes on issues
        uses: ivan-developer-01/jokes-on-issues-action@main
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```
### Custom configuration

```yaml
name: "Greet With A Random Joke"
on:
  issues:
    types: [opened, reopened]


jobs:
  test:
    name: setup environment
    runs-on: ubuntu-latest
    steps:
      - name: jokes on issues
        uses: ivan-developer-01/jokes-on-issues-action@main
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          issue_msg: 'Hi {{author}} enjoy this joke' # change accordingly
          PR_msg: 'Hi {{author}} enjoy this joke' # change accordingly
          allow_owner: true # get joke on your own issue :)

```


### Run on Pull requests too

This action runs on pull requests too

```yaml
name: "Greet With A Random Joke"
on:
  issues:
    types: [opened, reopened]
  pull_request_target:
    types: [opened, reopened]


jobs:
  test:
    name: setup environment
    runs-on: ubuntu-latest
    steps:
      - name: jokes on issues
        uses: ivan-developer-01/jokes-on-issues-action@main
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```


## Related action

Checkout [jokes on issues ](https://github.com/deep5050/MastJokeMara)

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ivan-developer-01/jokes-on-issues-action/issues) for a list of proposed features (and known issues).


## Version History

`v1.0.0` Initial release
`v1.1.0` Allow owners to get joke too !


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes 
4. Push to the Branch 
5. Open a Pull Request


<!-- ## Support

All Kinds Of Supports Are Welcome :raised_hands:! The Most Basic Way To Show Your Support Is To Star :star2: The Project, Or To Raise Issues :speech_balloon: You Can Also Support This Project By [**becoming a sponsor on GitHub**](https://github.com/sponsors/deep5050) :clap: Or By Making A [**Paypal**](https://paypal.me/deep5050) Donation :) -->

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
<!-- ## Contact

Dipankar Pal - dipankarpal5050@gmail.com -->



## Related Works
[NaughtyLust](https://github.com/deep5050/NaughtyLust) : Awesome Nautilus Scripts For Linux.

[qikQR](https://github.com/deep5050/qikQR) : Minimal QR Code Generator App Made With Electron.

[cppcheck-action](https://github.com/deep5050/cppcheck-action) : Check Security Flaws In Your C/C++ Codes Right From GitHub Action Workflows.

[autopy-lot](https://github.com/deep5050/autopy-lot) : GitHub Action Setup To Convert Jupyter Notebooks To Python Scripts And Markdowns.

<div align=center>
<h1 align=center>Happy Coding! :hooray:</h2>
  
<p align=center><img align=center  src="https://visitor-badge.laobi.icu/badge?page_id=ivan-developer-01.jokes-on-issues-action" alt="Visitors">  </p>

</div>
