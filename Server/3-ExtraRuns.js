
//3)Extra runs conceded per team in the year 2016
function ExtraRunByTeam(matchesData, deliveryData) {
   let seasonData = {};
   for (let i = 0; i < matchesData.length; i++) {
       let match = matchesData[i];
       let id = match.id;
       let season = match.season;

       if (id !== undefined) {
           if (!seasonData[id]) {
               seasonData[id] = season;
           }
       }
   }

   let teamConcededExtraRun = {};
   for (let i = 0; i < deliveryData.length; i++) {
       let delivery = deliveryData[i];
       let bowlingTeam = delivery["bowling_team"];
       let extraRun = delivery["extra_runs"];
       let id = delivery["match_id"];
       let year = seasonData[id];

       if (year !== undefined && year === 2016) {
           if (!teamConcededExtraRun[year]) {
               teamConcededExtraRun[year] = {};
           }
           if (!teamConcededExtraRun[year][bowlingTeam]) {
               teamConcededExtraRun[year][bowlingTeam] = 0;
           }
           teamConcededExtraRun[year][bowlingTeam] += Number(extraRun);
       }
   }

   return teamConcededExtraRun;
}

// console.log(ExtraRunByTeam(matchesData, deliveriesData));
module.exports = ExtraRunByTeam;
