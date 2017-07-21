// Node Packages
var fs = require("fs");
var inquirer = require("inquirer");

// link modules
var movies = require("./movies.js");
var songs = require("./songs.js");
var tweets = require("./tweets.js");
var logs = require("./log.txt")

// use inquirer to ask the user to select an option
// and prompt for a request if necessary
inquirer
  .prompt([
    {type: "list",
      message: "What do you want liri to do?",
      choices: ["Get my tweets", "Spotify a song", "Tell me about the movie", "Do this for me"],
      name: "command"
    }
 ])
  .then(function(inquirerResponse) {

  	  if (inquirerResponse.command === "Get my tweets"){
  	  	console.log("Your command is " + inquirerResponse.command );
 
  	  	tweets.getTweets();

  	  }	else
   	  if (inquirerResponse.command === "Spotify a song"){
   	  	console.log("Your command is " + inquirerResponse.command );

  	  	songs.spotifySong();
  	  	
  	  }	else	  
   	  if (inquirerResponse.command === "Tell me about the movie"){
   	  	console.log("Your command is " + inquirerResponse.command );
  	  	movies.movieThis();
  	  	
  	  }	else	  
   	  if (inquirerResponse.command === "Do this for me"){
   	  	console.log("Your command is " + inquirerResponse.command );
  	  	doThis();
  	
  	  }	

    }); //end function(inquirerResponse)

//-------------------------------------------------------------------------------------------------

function doThis(){

  fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
      writeToLog("doThis function error = " + error);
    }
    console.log(data);
    var dataArray = data.split(",");
    if (dataArray[0] === "spotify-this-song"){
        songs.stringSongName(dataArray[1]);
    } else {
        if (dataArray[0] === "movie-this"){
            movies.callOMDBapi(dataArray[1]);
        } else {
           tweets.getTweets();
        }
    } 
  });
 }// end function do this
//------------------------------------------------------------

function writeToLog(data) {

  console.log("inside writeToLog function")

  // fs.appendFile("./log.txt", data, function(err) {

  //     if (err) {
  //       console.log(err);
  //     }
  //     else {
  //       console.log("Content Added!");
  //     }

  // });

}