var fs = require('fs');

function writeToLog(data) {
  data += "\n";

  fs.appendFile("./log.txt", data, function(err) {

      if (err) {
        console.log(err);
      }

  });
}
module.exports = {writeToLog};