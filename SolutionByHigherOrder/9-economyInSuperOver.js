function economyInSuperOver(deliveries) {
    const superOverDeliveries = deliveries.filter(({ is_super_over }) => is_super_over !== "0");

    const bowlerStats = superOverDeliveries.reduce((acc, { bowler, total_runs, wide_runs, noball_runs }) => {
        const runs = Number(total_runs);
        if (!acc[bowler]) {
            acc[bowler] = { total_runs: runs, total_balls: 0 };
        } else {
            acc[bowler].total_runs += runs;
        }
        
        if (wide_runs === "0" && noball_runs === "0") {
            acc[bowler].total_balls++;
        }
        
        return acc;
    }, {});

    const economyOfBowlers = Object.entries(bowlerStats).map(([bowler, stats]) => {
        const total_runs = stats.total_runs;
        const total_balls = stats.total_balls;
        const economy = total_runs / (total_balls / 6);
        return { bowler, economy };
    });

 
    const bestBowler = economyOfBowlers
        .sort((a, b) => a.economy - b.economy)[0]; 

    return {
        [bestBowler.bowler]: bestBowler.economy 
    };
}
module.exports = economyInSuperOver;
