

// 1)Number of matches played per year for all the years in IPL.
     function matchesPlayed(matchesData)
     {
        let NumOfMatches = matchesData.reduce((accumulator,match)=>{
            let season  = match.season;

            if(season !== undefined){
            if(!accumulator[season]){
                accumulator[season]=0
            }
            accumulator[season]++;
        }
            return accumulator;
        },{});
        return NumOfMatches;
     }
    //  console.log(matchesPlayed(matchesData));
    module.exports = matchesPlayed; 