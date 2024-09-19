
// 4)Top 10 economical bowlers in the year 2015
//     Economy Rate=Total_run/Total_ball
//    bye-run,leg-run,penalty not calculated 

  function bowlerEconomy(matchesData, deliveryData) {
        let matchIdSeason = {};
    
        for (let match of matchesData) {
            let season = match["season"];
            let matchId = match["id"];
            matchIdSeason[matchId] = season;
        }
    
        let bowlerStats = {};
        for (let delivery of deliveryData) {
            let deliveryId = delivery["match_id"];
            let bowler = delivery["bowler"];
            let totalRun = delivery["total_runs"];
            let byeRun = delivery["bye_runs"];
            let legByeRun = delivery["legbye_runs"];
            let penaltyRun = delivery["penalty_runs"];
            let wide = delivery["wide_runs"];
            let noBall = delivery["noball_runs"];
            let season = matchIdSeason[deliveryId];
            
            if (season === 2015) {
                if (!bowlerStats.hasOwnProperty(bowler)) {
                    bowlerStats[bowler] = { totalRuns: 0, validBalls: 0 };
                }
                let runs = totalRun - byeRun - legByeRun - penaltyRun;
                bowlerStats[bowler].totalRuns += runs;
    
                if (wide === 0 && noBall === 0) {
                    bowlerStats[bowler].validBalls += 1;
                }
            }
        }
    
        let economyRates = [];
           for (let bowler in bowlerStats) {
              let stats = bowlerStats[bowler];
              let totalBalls = stats.validBalls;
              let totalRuns = stats.totalRuns;
              let economyRate = (totalRuns / totalBalls) * 6;
             economyRates.push({ bowler: bowler, economyRate: economyRate });
        }
        economyRates.sort((a, b) => a.economyRate - b.economyRate);
        let top10Bowlers = economyRates.slice(0, 10);
        return top10Bowlers;
    }
    //console.log(bowlerEconomy(matchesData, deliveriesData));
    module.exports = bowlerEconomy; 

