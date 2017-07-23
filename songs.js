var inquirer = require('inquirer');
var Spotify = require("node-spotify-api");

//------------------------------------------------------------------------------

var log = require("./log.js");

//------------------------------------------------------------------------------

function spotifySong(){

    var requestedSong = "";
    var songName = "";
    inquirer
    .prompt([
     {
      type: "input",
      name: "song",
      message: "What song do you want me to spotify???"
     }
    
    ]).then(function(inquirerResponse) {

      if (inquirerResponse.song === "") {
         console.log("user didn't select a song, will spotify 'The Sign'");
         requestedSong = "The Sign";

      }
      else {

        requestedSong = inquirerResponse.song;
      }

      stringSongName(requestedSong);
    });
}

//------------------------------------------------------------------------------------------------


function stringSongName(requestedSong){

    var songSelected = requestedSong.split(" ");//make it an array in case the name has multiple words  

    var songName = "";

    if (songSelected.length === 1){
          songName = songSelected[0];

    } else {
        songName = songSelected[0];
        for (var x = 1; x < songSelected.length; x++) {
           songName += "+" + songSelected[x];
        }
    }
    callSpotify(songName);
} // end function stringSongName

//-----------------------------------------------------

function callSpotify(songName) {
//  console.log("inside callSpotify");
//  console.log(songName);
  var spotify = new Spotify({
    id: "6e4f3f6178c740e9a4934a0728a661c2",
    secret: "03fd06a3b5ff4f088366639db834651e"
  });


  spotify.search({ type: 'track', query: songName }, function(err, data) {

    if (err) {
      return console.log('Error occurred: ' + err);
      log.writeToLog("error: " + err + " occurred when calling Spotify");
    }
    var songReturned = data.tracks.items[0];
    var songInfo = []; //empty array to hold data
        songInfo.push({
          'artist(s)': songReturned.artists[0].name, 
          'song name: ': songName,
          'preview song: ': songReturned.preview_url,
          'album: ': songReturned.album.name
        });

    console.log(songReturned.name + '\n Artist: ' + songReturned.artists[0].name + 
                            '\n Preview Song: ' + songReturned.preview_url +
                            '\n Album: ' + songReturned.album.name);
    log.writeToLog(songReturned.name + '\n Artist: ' + songReturned.artists[0].name + 
                            '\n Preview Song: ' + songReturned.preview_url +
                            '\n Album: ' + songReturned.album.name);
    });


} //end call Spotify function


module.exports = {spotifySong, stringSongName, callSpotify};