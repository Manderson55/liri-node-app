var inquirer = require('inquirer');
var Spotify = require("node-spotify-api");

//-------------------------------------------------------------------------------------------------

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
        console.log("user selected " + inquirerResponse.song);
        requestedSong = inquirerResponse.song;
      }

      stringSongName(requestedSong);
    });
}

//------------------------------------------------------------------------------------------------


function stringSongName(requestedSong){
    console.log("inside string together song name function");
    var songSelected = requestedSong.split(" ");//make it an array in case the name has multiple words  
    console.log(songSelected);
    console.log(songSelected.length);
    var songName = "";

    if (songSelected.length === 1){
          songName = songSelected[0];
          console.log(songName);
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
  console.log("inside callSpotify");
  console.log(songName);
  var spotify = new Spotify({
    id: "6e4f3f6178c740e9a4934a0728a661c2",
    secret: "03fd06a3b5ff4f088366639db834651e"
  });
  console.log(spotify);
  // var getArtistNames = function(artist) {
  //    return artist.name;
  // }

  spotify.search({ type: 'track', query: songName }, function(err, data) {
    console.log("inside spotify.search");
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    // var songsReturned = data.tracks.items;
    // var songsInfo = []; //empty array to hold data

    // for (var i = 0; i < songsReturned.length; i++) {
    //     songsInfo.push({
    //       'artist(s)': songs[i].artists.map(getArtistNames),
    //       'song name: ': songs[i].name,
    //       'preview song: ': songs[i].preview_url,
    //       'album: ': songs[i].album.name,
    //     });
    // }
    // }
    console.log(data);
  });
} //end call Spotify function


module.exports = {spotifySong, stringSongName};