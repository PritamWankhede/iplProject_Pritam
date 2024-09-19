
// 8)Find the highest number of times one player has been dismissed by another player
//     output {bowler , batsman , number of dismiss}   

     function highestDismissal(deliveriesData)
     {
        let dismissalData = {};
        for(let key in deliveriesData)
        {
            let delivery = deliveriesData[key];
            let bowler =  delivery["bowler"];
            let batsman = delivery["batsman"];
            let dismissal = delivery["dismissal_kind"];
            
            if(!dismissalData.hasOwnProperty(batsman))
            {
                dismissalData[batsman] = {}; 
            }
       
            if(!dismissalData[batsman].hasOwnProperty(bowler))
                {
                    dismissalData[batsman][bowler] = 0;  
                }
                if(dismissal)
                 {
                    if(dismissal !== "run out")
                    {
                       dismissalData[batsman][bowler]++;  
                    }
                }
        } 
         
        let result = {};
        for (let batsman in dismissalData) {
            let bowlers = dismissalData[batsman];
            let highestBowler = null;
            let highestCount = 0;
        
            for (let bowler in bowlers) {
                let count = bowlers[bowler];
                if (count > highestCount) {
                    highestCount = count;
                    highestBowler = bowler;
                }
            }
            if(highestBowler !== null && highestCount !==0){
            result[batsman] = { bowler: highestBowler, count: highestCount };
        }
        }
        return result;
        
    }
//    console.log(highestDismissal(deliveriesData));
module.exports = highestDismissal; 