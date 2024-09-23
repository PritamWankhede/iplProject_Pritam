
//6)Find a player who has won the highest number of Player of the Match awards for each season
function highestPlayer(data) {
  let player = {};

  for (let matchData of data) {
      let { player_of_match: playerOfMatch, season: seasonYear } = matchData;

      if (!player.hasOwnProperty(seasonYear)) {
          player[seasonYear] = {};
      }

      if (!player[seasonYear].hasOwnProperty(playerOfMatch)) {
          player[seasonYear][playerOfMatch] = 0;
      }
      player[seasonYear][playerOfMatch]++;
  }

  let highestAwards = {};
  for (let season in player) {
      let players = player[season];
      let maxCount = 0;
      let topPlayers = [];

      for (let p in players) {
          if (players[p] > maxCount) {
              maxCount = players[p];
              topPlayers = [p];
          } else if (players[p] === maxCount) {
              topPlayers.push(p);
          }
      }
      highestAwards[season] = topPlayers;
      highestAwards[season].Count = maxCount;
  }
  return highestAwards;
}

 //console.log(highestPlayer(matchesData));
 module.exports = highestPlayer; 