// 4) Top 10 economical bowlers in the year 2015
//    Economy Rate = Total_run / Total_ball
//    bye-run, leg-run, penalty not calculated 

function topTenEconomicalBowler(matchesData, deliveryData, season_year) {
   let matchIdSeason = matchesData.reduce((accumulator, match) => {
       let { id, season } = match; 

       if (!accumulator[id]) {
           accumulator[id] = season;
       }
       return accumulator;
   }, {});

   let economyBowler = deliveryData.reduce((accumulator, delivery) => {
       let { match_id: deliveryId, bowler, total_runs: totalRun, bye_runs: byeRun, 
         legbye_runs: legByeRun, penalty_runs: penaltyRun, wide_runs: wide, noball_runs: noBall } = delivery;
         
       let season = matchIdSeason[deliveryId];

       if (season === season_year) {
           let runs = totalRun - byeRun - legByeRun - penaltyRun;
           if (!accumulator[bowler]) {
               accumulator[bowler] = { Runs: 0, validballs: 0 };
           }
           accumulator[bowler].Runs += runs;

           if (wide === 0 && noBall === 0) {
               accumulator[bowler].validballs += 1;
           }
       }
       return accumulator;
   }, {});

   let top10Bowler = [];
   for (let bowler in economyBowler) {
       let { Runs: totalRuns, validballs: totalBalls } = economyBowler[bowler]; 
       let bowlerEco = (totalRuns / totalBalls) * 6;

       top10Bowler.push({ bowler: bowler, Economy: bowlerEco });
   }

   top10Bowler.sort((a, b) => a.Economy - b.Economy);

   return top10Bowler.slice(0, 10);
}

// console.log(topTenEconomicalBowler(matchesData, deliveryData, 2015));
module.exports = topTenEconomicalBowler;
