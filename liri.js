
/* Make it so liri.js can take in one of the following commands:

   * `my-tweets`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`
*/
// fs is the node package to write and read files and we need it to get the information
var fs = require("fs");
// inquirer needs to be loaded before we run the liri app
var inquirer = require("inquirer");

fs.readFile("keys.js", "utf8", function(error, data) {

  if (error) {  //if the read returns an error console log the err
    return console.log(error);
  }				//if the read was successful store the keys in an array comma separated
  console.log(data);
  var keysArray = data.split(",");
  console.log(keysArray);
  for (var i = 0; i < keysArray.length; i++) {
    console.log(keysArray[i]);
  }

});

// Grab the command line arguments from Node.
var nodeArg = process.argv[2];
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
  	  	console.log("Your command is " + inquirerResponse.command )
  	  	getTweets();

  	  }	else
   	  if (inquirerResponse.command === "Spotify a song"){
   	  	console.log("Your command is " + inquirerResponse.command )
  	  	spotifySong();
  	  	
  	  }	else	  
   	  if (inquirerResponse.command === "Tell me about the movie"){
   	  	console.log("Your command is " + inquirerResponse.command )
  	  	movieThis();
  	  	
  	  }	else	  
   	  if (inquirerResponse.command === "Do this for me"){
   	  	console.log("Your command is " + inquirerResponse.command )
  	  	doThis();
  	
  	  }	

  });



  function spotifySong(){

/* Spotify client ID 6e4f3f6178c740e9a4934a0728a661c2
		client Secret 03fd06a3b5ff4f088366639db834651e
*/

  	var requestedSong = "";

  	inquirer
  	.prompt([
    {
   	 	type: "input",
    	name: "song",
    	message: "What song do you want me to spotify???"
 	 }
    
 	]).then(function(inquirerResponse) {


  		if (inquirerResponse.song === "") {
   			 console.log("user didn't select a song, will use 'The Sign'");
   			 requestedSong = "The Sign";
  		}

 		 else {
 		 	console.log("user selected " + inquirerResponse.song);
 		 	requestedSong = inquirerResponse.song;
  }
});

  }; //end function spotifySong

/*  function getTweets();

  function movieThis();

  function doThis();*/

