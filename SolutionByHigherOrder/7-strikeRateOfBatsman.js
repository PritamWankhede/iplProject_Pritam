

 //7)Find the strike rate of a batsman for each season
 // Strike Rate=(Total Balls Faced/Total Runs Scored​)×100  

  function strikeRateOfBatsman(matchesData,deliveryData)
  {
     let matchSeasonId = matchesData.reduce((accumulator,match)=>{
        let id = match["id"];
        let season = match["season"];
        if(!accumulator[id]){
        accumulator[id] = season;
        }
        return accumulator;
     },{});

      let batsmanData = deliveryData.reduce((accumulator,delivery)=>{
         let id = delivery["match_id"];
          let batsman_runs =  delivery["batsman_runs"];
          let batsman = delivery["batsman"];
           let season = matchSeasonId[id];
            //  console.log(batsman_runs);
        if(season !== undefined){
          if(!accumulator[season]){
            accumulator[season] = {};
          } 
         if(!accumulator[season][batsman])
            {
              accumulator[season][batsman] = {Total_Ball_faced: 0 , Total_run_scored:0};
            } 

          accumulator[season][batsman]["Total_run_scored"] += batsman_runs;
          accumulator[season][batsman]["Total_Ball_faced"]++;
        }
        return accumulator;
      },{});

      let batsmanStrikeRate={};
      for (let season in batsmanData) {
          batsmanStrikeRate[season] = {};
          for (let batsman in batsmanData[season]) {
              let totalRun = batsmanData[season][batsman]["Total_run_scored"];
              let totalBall = batsmanData[season][batsman]["Total_Ball_faced"];
              let strikeRate = (totalRun / totalBall) * 100 ;
  
              batsmanStrikeRate[season][batsman] = { StrikeRate: strikeRate.toFixed(2) };
          }
      }
      return batsmanStrikeRate;
  } 
  module.exports = strikeRateOfBatsman; 


