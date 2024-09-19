//7)Find the strike rate of a batsman for each season
// Strike Rate=(Total Balls Faced/Total Runs Scored​)×100  

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
   console.log(matchMapping);

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
// console.log(strikeRate(matchesData,deliveriesData));
module.exports = strikeRate; 