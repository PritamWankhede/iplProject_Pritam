
//3)Extra runs conceded per team in the year 2016
     function ExtraRunByTeam(matchesData,deliveryData){
      let seasonData = matchesData.reduce((accumulator,match)=>{
        let id = match.id;
        let season = match.season;
  
         if(id !== undefined){
         if(!accumulator[id]){
            accumulator[id] = season;
         }
        }
         return accumulator;
      },{});

     let teamConcededExtraRun = deliveryData.reduce((accumulator,delivery)=>{
        let bowlingTeam = delivery["bowling_team"];
        let extraRun = delivery["extra_runs"];
        let id = delivery["match_id"];
         let year = seasonData[id];

         if(year !== undefined){
         if(year === 2016){
            if(!accumulator[year]){
                accumulator[year] = {} 
            }
  
            if(!accumulator[year][bowlingTeam]){
                accumulator[year][bowlingTeam] = 0;  
            }
            accumulator[year][bowlingTeam] += Number([extraRun]);
         }
     }
       return accumulator;
     },{});
     return teamConcededExtraRun;
     }
     //console.log(ExtraRunByTeam(matchesData,deliveriesData));
     module.exports = ExtraRunByTeam; 