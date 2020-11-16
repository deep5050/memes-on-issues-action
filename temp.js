const Axios = require('axios');

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  

async function getRandomMeme() {
    const url = "https://raw.githubusercontent.com/deep5050/programming-memes/main/memes.json"
    try {
        const response = await Axios.get(url);
        var data = response.data;
        var random = randomNumber(0, data.length);
        var img_data = data[random];
        var image_url = "https://raw.githubusercontent.com/deep5050/programming-memes/main/" + img_data['path'];
        console.log(image_url);
    } catch (err) {
        // core.setFailed(`Error:${err.message}`);
        console.log(`Error in getting a meme: ${err.message}`);
        return '';
    }
}
randomMeme();