var fs = require("fs");
var Twitter = require("twitter");

//----------------------------------------------------------------

var twitterKeysArray = require("./keys.js");
var log = require("./log.js");

//----------------------------------------------------------------
  
function getTweets() {
var	  consumerKey = '',
	  consumerSecret = '',
	  accessTokenKey = '',
	  accessTokenSecret = '';
 
// setting the keys to the keys in keys.js file
var twitterKeysList = twitterKeysArray.twitterKeys;
for (var key in twitterKeysList) {

  switch (key) {      
    case "consumer_key":     
        consumerKey = twitterKeysList[key];
        break;
    case "consumer_secret":
        consumerSecret = twitterKeysList[key];
        break;
    case "access_token_key":
        accessTokenKey = twitterKeysList[key];
        break;
    case "access_token_secret":
        accessTokenSecret = twitterKeysList[key];
        break;
    default:
    console.log("Couldn't find the Twitter Key");
    log.writeToLog("Couldn't find the Twitter Key")

  } 
}

var twitterAccount = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: accessTokenKey,
  access_token_secret: accessTokenSecret
});

var parameters = {screen_name: "mzaVenezuela",
			  count: 20 };


twitterAccount.get('statuses/user_timeline', parameters, function(error, tweets, response) {
  if (error) {
  	console.log("error encountered! ");
    log.writeToLog("Couldn't connect to Twitter!");   
  } else {

      console.log("Author: " + tweets[0].user.name);
      log.writeToLog("Author: " + tweets[0].user.name);

      for (var x = 0; x < tweets.length; x++) {     
          console.log("Tweet #" + (x+1) + ":");
          log.writeToLog("Tweet #" + (x+1) + ":");
          console.log("Date Posted: " + tweets[x].created_at);
          log.writeToLog("Date Posted: " + tweets[x].created_at);
          console.log("Tweet: " + tweets[x].text);
          log.writeToLog("Tweet: " + tweets[x].text);

      } 
  }

});

} //end get tweets

module.exports = {getTweets};