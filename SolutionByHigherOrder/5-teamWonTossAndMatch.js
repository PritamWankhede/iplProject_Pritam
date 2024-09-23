const matchesData = require('../csvToJson/matches.json');
const deliveryData = require('../csvToJson/deliveries.json'); 

//5)Find the number of times each team won the toss and also won the match

function teamWonTossAndMatch(matchData) {
  let teams = matchData.reduce((accumulator, match) => {
      let { toss_winner: tossWon, winner: matchWon } = match; 

      if (tossWon !== undefined) {
          if (tossWon === matchWon) {
              if (!accumulator[matchWon]) {
                  accumulator[matchWon] = 0;
              }
              accumulator[matchWon]++;
          }
      }
      return accumulator;
  }, {});
  
  return teams;
}

// console.log(teamWonTossAndMatch(matchesData));
module.exports = teamWonTossAndMatch;
