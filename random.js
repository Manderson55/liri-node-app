var fs = require("fs");

//--------------------------------------------------------------------------

var log = require("./log.js");
var songs = require("./songs.js");
var movies = require("./movies.js");
var tweets = require("./tweets.js");

//--------------------------------------------------------------------------

function doThis(){

  fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
      log.writeToLog("doThis function error = " + error);
    }

    var dataArray = data.split(",");

    if (dataArray[0] === "spotify-this-song"){
        console.log("Random request was: " + dataArray[0] + " - " + dataArray[1]);
        log.writeToLog("Random request was: " + dataArray[0] + " - " + dataArray[1]);
        songs.callSpotify(dataArray[1]);
    } else {
        if (dataArray[0] === "movie-this"){
            console.log("Random request was: " + dataArray[0] + " - " + dataArray[1]);
            log.writeToLog("Random request was: " + dataArray[0] + " - " + dataArray[1]);
            movies.callOMDBapi(dataArray[1]);
        } else {
           console.log("Random request was: " + dataArray[0]);
           log.writeToLog("Random request was: " + dataArray[0]);
           tweets.getTweets();
        }
    } 
  });
 }// end function do this

 module.exports = {doThis};