const matchesData = require('../csvToJson/matches.json');
const deliveryData = require('../csvToJson/deliveries.json');

// 6)Find a player who has won the highest number of Player of the Match awards for each season

    function getTopPlayerOfTheMatchBySeason(matchesData){
       let playerPerSeason = matchesData.reduce((accumulator,match)=>{
          let playerOfMatch = match["player_of_match"];
         let season = match["season"];
        //   console.log(match["season"])
          if(season !== null && season !== undefined){
          if(!accumulator[season]){
            accumulator[season] = {};
          }
        
          if(!accumulator[season][playerOfMatch]){
            accumulator[season][playerOfMatch] = 0;
          }
        
          accumulator[season][playerOfMatch]++;
        }
          return accumulator;
       },{});

    

       return playerPerSeason;
    }
  //  console.log(getTopPlayerOfTheMatchBySeason(matchesData));
  module.exports = getTopPlayerOfTheMatchBySeason;