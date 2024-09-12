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






