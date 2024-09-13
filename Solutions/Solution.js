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

// function matchCount(matchesData)
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


// function teamWonPerYear(matchesData)
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
   function highestPlayer(data){
    let player = {};
     for(let index=0;index<data.length;index++)
     {
        
        let matchData = data[index];
        let playerOfMatch = matchData["player_of_match"];
        let seasonYear = matchData["season"];
           
        if(!player.hasOwnProperty(seasonYear))
         {
           player[seasonYear]={};
         }

        if(!player[seasonYear].hasOwnProperty(playerOfMatch))
         {
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
    }
     return highestAwards;
   }
 console.log(highestPlayer(matchesData));
