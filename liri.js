// Node Packages
var fs = require("fs");
var inquirer = require("inquirer");

// link modules
var movies = require("./movies.js");
var songs = require("./songs.js");
var tweets = require("./tweets.js");
var log = require("./log.js");
var random = require("./random.js");

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
  	  	log.writeToLog("\n Liri's command is " + inquirerResponse.command );
  	  	tweets.getTweets();

  	  }	else
   	  if (inquirerResponse.command === "Spotify a song"){
   	  	log.writeToLog("\n Liri's command is " + inquirerResponse.command );
  	  	songs.spotifySong();
  	  	
  	  }	else	  
   	  if (inquirerResponse.command === "Tell me about the movie"){
        log.writeToLog("\n Liri's command is " + inquirerResponse.command );
  	  	movies.movieThis();
  	  	
  	  }	else	  
   	  if (inquirerResponse.command === "Do this for me"){
        log.writeToLog("\n Liri's command is " + inquirerResponse.command );
  	  	random.doThis();
  	
  	  }	

    }); //end function(inquirerResponse)

//-------------------------------------------------------------------------------------------------


//------------------------------------------------------------