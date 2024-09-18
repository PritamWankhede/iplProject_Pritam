const matchesData = require('../csvToJson/matches.json');
const deliveryData = require('../csvToJson/deliveries.json');

// 1)Number of matches played per year for all the years in IPL.
// 2)Number of matches won per team per year in IPL.
// 3)Extra runs conceded per team in the year 2016
// 4)Top 10 economical bowlers in the year 2015
// 5)Find the number of times each team won the toss and also won the match
// 6)Find a player who has won the highest number of Player of the Match awards for each season
// 7)Find the strike rate of a batsman for each season
// 8)Find the highest number of times one player has been dismissed by another player
// 9)Find the bowler with the best economy in super overs

// 1)Number of matches played per year for all the years in IPL.
    //  function matchesPlayed(matchesData)
    //  {
    //     let NumOfMatches = matchesData.reduce((accumulator,match)=>{
    //         let season  = match.season;

    //         if(season !== undefined){
    //         if(!accumulator[season]){
    //             accumulator[season]=0
    //         }
    //         accumulator[season]++;
    //     }
    //         return accumulator;
    //     },{});
    //     return NumOfMatches;
    //  }
    //  console.log(matchesPlayed(matchesData));

     // 2)Number of matches won per team per year in IPL.
       
    //  function matchWonPerYear(matchesData)
    //  {
    //     let wonMatches = matchesData.reduce((accumulator,match)=>{
    //         let season = match.season;
    //         let winner = match.winner;
    //       if(season !==undefined){
    //         if(!accumulator[season]){
    //             accumulator[season] = {};
    //         }

    //         if(!accumulator[season][winner]){
    //             accumulator[season][winner] = 0;
    //         }
    //         accumulator[season][winner]++;
    //     }
    //      return accumulator;
    //     },{});
    //     return wonMatches;
    //  }
    //  console.log(matchWonPerYear(matchesData));

  