const path = require("path");

var friend = require("../data/friends.js");
module.exports = function (app) {
    app.get('/api/friends', function(req, res) {
		res.json(friend);
	});

	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		// Capture the user input object
		var userInput = req.body;


		var userResponses = userInput.scores;
		// console.log('userResponses = ' + userResponses);

		// Compute best friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing friend in the list
		for (var i = 0; i < friend.length; i++) {
			

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friend[i].scores[j] - userResponses[j]);
			}


			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friend[i].name;
				matchImage = friend[i].photo;
			}
		}

		// Add new user
		friend.push(userInput);

		// Send appropriate response
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
        var totalDifference = 10000;
	});
}