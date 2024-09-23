
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
            let { match_id: deliveryId, bowler, total_runs: totalRun, bye_runs: byeRun, legbye_runs: legByeRun, 
                          penalty_runs: penaltyRun, wide_runs: wide, noball_runs: noBall } = delivery;
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
            let { validBalls: totalBalls, totalRuns } = bowlerStats[bowler];
            let economyRate = (totalRuns / totalBalls) * 6;
            economyRates.push({ bowler: bowler, economyRate: economyRate });
        }
    
        economyRates.sort((a, b) => a.economyRate - b.economyRate);
        let top10Bowlers = economyRates.slice(0, 10);
        return top10Bowlers;
    }
    //console.log(bowlerEconomy(matchesData, deliveriesData));
    module.exports = bowlerEconomy; 

