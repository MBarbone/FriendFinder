var path = require('path');

var friends = require("../data/friends");


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {
    
    var friendMatch = {
      name: "",
      photo: "",

      
      // large for comparison
      friendDifference: 100000,
    };

  
    var userData = req.body;
    var userScores = userData.scores;


    
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

       
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

     
      if (totalDifference <= friendMatch.friendDifference) {
        
        friendMatch.name = currentFriend.name;
        friendMatch.photo = currentFriend.photo;
        friendMatch.friendDifference = totalDifference;
      }
    }

    
    friends.push(userData);

    
    res.json(friendMatch);
  });
};





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