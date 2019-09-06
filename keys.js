console.log("Keys Loaded");

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// KEYS and Client Secret
//2ce9a53f01af4e05a033ba8809afc409
// 962000cc222c4fb9bee6c84bd1b2ca47