const matchesData = require('../csvToJson/matches.json');
const deliveryData = require('../csvToJson/deliveries.json');
 
 // 2)Number of matches won per team per year in IPL.
       
     function matchWonPerYear(matchesData)
     {
        let wonMatches = matchesData.reduce((accumulator,match)=>{
            let season = match.season;
            let winner = match.winner;
          if(season !==undefined){
            if(!accumulator[season]){
                accumulator[season] = {};
            }

            if(!accumulator[season][winner]){
                accumulator[season][winner] = 0;
            }
            accumulator[season][winner]++;
        }
         return accumulator;
        },{});
        return wonMatches;
     }
    //  console.log(matchWonPerYear(matchesData));
    module.exports = matchWonPerYear; 