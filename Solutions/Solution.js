const matchesData = require('../csvToJson/matches.json');
const deliveriesData = require('../csvToJson/deliveries.json');


// 1)Number of matches played per year for all the years in IPL.
// 2)Number of matches won per team per year in IPL.
// 3)Extra runs conceded per team in the year 2016
// 4)Top 10 economical bowlers in the year 2015
// 5)Find the number of times each team won the toss and also won the match
// 6)Find a player who has won the highest number of Player of the Match awards for each season
// 7)Find the strike rate of a batsman for each season
// 8)Find the highest number of times one player has been dismissed by another player
// 9)Find the bowler with the best economy in super overs

// 1)function matchCount(matchesData)
// {
//    let matchesAndCount = {};
//    for(let index =0;index < matchesData.length;index++)
//    {
//     let key = matchesData[index].season;
//     if(key !== undefined && key !== null){
//      if(matchesAndCount.hasOwnProperty(key))
//      {
//         matchesAndCount[key]++;
//      }
//      else{
//         matchesAndCount[key] = 1;
//      }
//     }
//    }
//    return matchesAndCount;
// }
// console.log(matchCount(matchesData));


// 2)function teamWonPerYear(matchesData)
// {
//     let matchesPlayed ={};
//      for(let index=0; index<matchesData.length; index++){
//      let team = matchesData[index].winner;
//      let year = matchesData[index].season;   
//         if(team !== undefined && team !== null){
//         if(!matchesPlayed.hasOwnProperty(year)){
//             matchesPlayed[year]={};
//         }
//         if(!matchesPlayed[year].hasOwnProperty(team)){
//             matchesPlayed[year][team] = 0;
//         }
//         matchesPlayed[year][team]++;
//      }
//  }
//    return matchesPlayed;
// }
// console.log(teamWonPerYear(matchesData));


//5)Find the number of times each team won the toss and also won the match
//   function tossAndMatch(data){
//     let winningData={};
//    for(let index=0; index < data.length; index++)
//    {
//       let match = data[index];
//       let winner = match["winner"];
//       let tossWinner = match["toss_winner"];
//       if(match && match["winner"] !== undefined && match["toss_winner"] !== undefined){
//         if(winner === tossWinner){
//            if(!winningData.hasOwnProperty(winner))
//            { 
//               winningData[winner]=0;
//            }
//            winningData[winner]++;
//         }
//     }
// }
//     return winningData; 
//   }
//   console.log(tossAndMatch(matchesData));

//6)Find a player who has won the highest number of Player of the Match awards for each season
//    function highestPlayer(data){
//     let player = {};
//      for(let index=0;index<data.length;index++)
//      {
        
//         let matchData = data[index];
//         let playerOfMatch = matchData["player_of_match"];
//         let seasonYear = matchData["season"];
           
//         if(!player.hasOwnProperty(seasonYear))
//          {
//            player[seasonYear]={};
//          }

//         if(!player[seasonYear].hasOwnProperty(playerOfMatch))
//          {
//            player[seasonYear][playerOfMatch] = 0;
//          }
//         player[seasonYear][playerOfMatch]++;   
//      }


//      let highestAwards = {};
//     for (let season in player) {
//         let players = player[season];
//         let maxCount = 0;
//         let topPlayers = [];

//         for (let p in players) {  
//             if (players[p] > maxCount) {
//                 maxCount = players[p];
//                 topPlayers = [p];
//             } else if (players[p] === maxCount) {
//                 topPlayers.push(p);
//             }
//         }
//         highestAwards[season] = topPlayers;
//     }
//      return highestAwards;
//    }
//  console.log(highestPlayer(matchesData));

// 3)Extra runs conceded per team in the year 2016
 
//     function extraRunByTeam(deliveriesData ,matchData){
//         let teamData = {};
//          let matchYearData = {};
//          for(let j=0;j<matchData.length;j++)
//          {
//              let match = matchData[j];
//              let matchId = match.id;
//              let matchYear= match.season;
//              matchYearData[matchId] = matchYear;
//          }
//        for(let index=0 ;index<deliveriesData.length;index++)
//        {
//            let data = deliveriesData[index];
//            let extraRun = data["extra_runs"];
//            let deliveryId = data["match_id"];
//            let bowlingTeam = data["bowling_team"];      
//            if(matchYearData[deliveryId] === 2016)
//             {
//                 if(!teamData.hasOwnProperty(bowlingTeam)){
//                         teamData[bowlingTeam] = 0;
//                 } 
//                 teamData[bowlingTeam] += extraRun ;
//             } 
// }
//        return teamData;
//     }
// console.log(extraRunByTeam(deliveriesData , matchesData));


//7)Find the strike rate of a batsman for each season
//Strike Rate=(Total Balls Faced/Total Runs Scored​)×100  

function strikeRate(matchData,deliveryData)
{
   let matchMapping = {};
   let result = {};
   
   for(let key in matchData){
    let match = matchData[key];
    let season = match["season"];
    let matchId = match["id"];
     matchMapping[matchId] = season;
   }
//    console.log(matchMapping);

   for(let id in matchMapping) 
   {
    let matchYear = matchMapping[id];
     
     if(!result.hasOwnProperty(matchYear))
     {
        result[matchYear]={};
     }
}

    for(let delivery in deliveryData){
        let deliveryId = deliveryData[delivery]["match_id"];
        let batsman = deliveryData[delivery]["batsman"];
        let runs =deliveryData[delivery]["batsman_runs"];
        let wide = deliveryData[delivery]["wide_runs"];
        let noBall = deliveryData[delivery]["noball_runs"];
        let year = matchMapping[deliveryId];
        if(!result[year].hasOwnProperty(batsman)){
            result[year][batsman] = {runs:0,balls:0};
        }
        result[year][batsman]["runs"] += runs;
        if(wide === 0 || noBall=== 0){
         result[year][batsman].balls += 1;
    }
}
   
   let batsmanStrikeRate = {};
    for(let year in result)
    {
       
        batsmanStrikeRate[year] = {};
           for(let batsman in result[year])
           {
            
             let runsAndBalls =  result[year][batsman];
              let strikeRate = (runsAndBalls.runs / runsAndBalls.balls) * 100
              batsmanStrikeRate[year][batsman] = parseFloat(strikeRate.toFixed(2)); 
           }
        
}
   return batsmanStrikeRate;
}
console.log(strikeRate(matchesData,deliveriesData));

//  output =>   result = {
//                         2016: {
//                                   Dhoni : strikeRate,
//                                   Raina : strikeRate
//                                }
//                        }





