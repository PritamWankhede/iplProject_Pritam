
//5)Find the number of times each team won the toss and also won the match
  function tossAndMatch(data){
    let winningData={};
   for(let index=0; index < data.length; index++)
   {
      let match = data[index];
      let winner = match["winner"];
      let tossWinner = match["toss_winner"];
      if(match && match["winner"] !== undefined && match["toss_winner"] !== undefined){
        if(winner === tossWinner){
           if(!winningData.hasOwnProperty(winner))
           { 
              winningData[winner]=0;
           }
           winningData[winner]++;
        }
    }
}
    return winningData; 
  }
//   console.log(tossAndMatch(matchesData));
module.exports = tossAndMatch; 