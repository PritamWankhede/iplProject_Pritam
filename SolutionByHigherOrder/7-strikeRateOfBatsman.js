//7)Find the strike rate of a batsman for each season
// Strike Rate=(Total Balls Faced/Total Runs Scored​)×100 

function strikeRateOfBatsman(matchesData, deliveryData) {
  let matchSeasonId = matchesData.reduce((accumulator, match) => {
      let { id } = match;
      let { season } = match; 
      if (!accumulator[id]) {
          accumulator[id] = season;
      }
      return accumulator;
  }, {});

  let batsmanData = deliveryData.reduce((accumulator, delivery) => {
      let { match_id: id, batsman_runs: batsmanRuns, batsman } = delivery; 
      let season = matchSeasonId[id];

      if (season !== undefined) {
          if (!accumulator[season]) {
              accumulator[season] = {};
          }
          if (!accumulator[season][batsman]) {
              accumulator[season][batsman] = { Total_Ball_faced: 0, Total_run_scored: 0 };
          }

          accumulator[season][batsman]["Total_run_scored"] += batsmanRuns;
          accumulator[season][batsman]["Total_Ball_faced"]++;
      }
      return accumulator;
  }, {});

  let batsmanStrikeRate = {};
  for (let season in batsmanData) {
      batsmanStrikeRate[season] = {};
      for (let batsman in batsmanData[season]) {
          let { Total_run_scored: totalRun, Total_Ball_faced: totalBall } = batsmanData[season][batsman];
          let strikeRate = (totalRun / totalBall) * 100;

          batsmanStrikeRate[season][batsman] = { StrikeRate: strikeRate.toFixed(2) };
      }
  }
  return batsmanStrikeRate;
}

module.exports = strikeRateOfBatsman;
