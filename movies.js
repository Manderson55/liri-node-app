var inquirer = require('inquirer');

function movieThis(){

    var movieSelected = "";
    var movieName = "";

    inquirer
    .prompt([
     {
      type: "input",
      name: "movie",
      message: "What movie do you want me to research???"
     }
    
    ]).then(function(inquirerResponse) {

      if (inquirerResponse.movie === "") {
         console.log("user didn't select a movie, will use 'Mr. Nobody'");
         movieSelected = "Mr. Nobody";
         callOMDBapi(movieSelected);
      }
      else {
        console.log("user selected " + inquirerResponse.movie);
        movieSelected = inquirerResponse.movie;
        callOMDBapi(movieSelected);
      }
    });
}

function callOMDBapi(movieSelected){

    var requestedMovie = movieSelected.split(" ");//make it an array in case the name has multiple words  
    var movieName = "";

    if (requestedMovie.length === 1){
          movieName = requestedMovie;
    } else {
      movieName = requestedMovie[0];
      for (var x = 1; x < requestedMovie.length; x++) {
         movieName += "+" + requestedMovie[x]; }
    }

    var request = require("request");

    request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=40e9cece", function(error, response, body) {

      if (!error && response.statusCode === 200) {
          console.log( movieSelected + '\n Title: ' + JSON.parse(body).Title + '\n Year Released: ' + JSON.parse(body).Year + '\n IMDB Rating: ' + JSON.parse(body).imdbRating + '\n Country it was Released: ' + JSON.parse(body).Country + '\n Language: ' + JSON.parse(body).Language + '\n Plot: ' + JSON.parse(body).Plot + '\n Actors: ' + JSON.parse(body).Actors + '\n Rotten Tomatoes URL: ' + JSON.parse(body).tomatoURL );

      }
    });
} // end function callOMDBapi

module.exports = {movieThis, callOMDBapi};