require("dotenv").config()
var Twitter = require("twitter");
var Spotify =  require('node-spotify-api')
var keys = require("./keys.js");
var client = new Twitter(keys.twitter)
var spotify = new Spotify(keys.spotify);
spotify.search({ type: 'track', query: "i saw the sign", limit : 1 }, function(err, data) {
   
    newMusic = data.items
    for (i = 0 ; i<newMusic.length; i ++){
        console.log(newMusic[i].track)
        
    }
   
   
    
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
   
  });
var params = {
    q: "JJ75703506",
    count:20
}
client.get('search/tweets', params, function(error, tweets, response) {
    if(error) throw error;
    var answer = tweets.statuses
    for (i = 0; i<answer.length; i++){
   console.log(answer[i].text)}
    })
 
/*require request
make the https call to retrieve the data from omdb
assign the parameters to twitter, 
change results of spotify into a readable format
export results into a text.*/
