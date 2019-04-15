var path = require("path");

var friends = require("../data/friends.js");

module.exports = function(app) {
  // retrieve friends entries
  app.get("/api/friends", function(res, req) {
    res.json(friends);
  });

  // add (post) new friend
  app.post("/api/friends", function(res, req) {
    // user input
    var userInput = req.body;

    // user score
    var userSurveyScore = userInput.score;

    
    var closestMatch = friendsArr.forEach(friendsArr.scores.reduce(function (prev, curr) {

        
       return Math.abs(curr - userSurveyScore) < Math.abs(prev - userSurveydid you Score) ? curr : prev}));
})};







// Ran out of time with this attempt
//     var totalDifference = [];


//     function findMatch() {
//       friendsArr.scores.forEach(function() {
//         totalDifference.push(Math.abs(friendsArr.scores - userSurveyScore));
//         var minDiff = totalDifference.min = function(totalDifference) {
//           return Math.min.apply(Math, totalDifference);
//         };

//         var matchedFriend= '';
//         minDiff 


//       });
//     }
//   })}});