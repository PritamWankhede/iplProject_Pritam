
//5)Find the number of times each team won the toss and also won the match
function tossAndMatch(data) {
  let winningData = {};
  
  for (let match of data) {
      let { winner, toss_winner: tossWinner } = match; 

      if (winner !== undefined && tossWinner !== undefined) {
          if (winner === tossWinner) {
              if (!winningData.hasOwnProperty(winner)) {
                  winningData[winner] = 0;
              }
              winningData[winner]++;
          }
      }
  }
  
  return winningData; 
}

//   console.log(tossAndMatch(matchesData));
module.exports = tossAndMatch; 