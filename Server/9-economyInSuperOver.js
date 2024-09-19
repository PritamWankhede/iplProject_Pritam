
function economyInSuperOver(deliveries) {
    let bowlerStats = {};
    for (const index in deliveries) {
        const { is_super_over, bowler, total_runs, wide_runs, noball_runs } = deliveries[index];

        if (is_super_over !== "0") {
            if (bowlerStats[bowler]) {
                bowlerStats[bowler]['total_runs'] += Number(total_runs);

                if (wide_runs === "0" && noball_runs === "0") {
                    bowlerStats[bowler]['total_balls']++;
                }
            } else {
                bowlerStats[bowler] = { 'total_runs': Number(total_runs), 'total_balls': 0 };

                if (wide_runs === "0" && noball_runs === "0") {
                    bowlerStats[bowler]['total_balls']++;
                }
            }
        }
    }

    let economyOfBowler = {};

    for (const bowler in bowlerStats) {
        const total_runs = bowlerStats[bowler]['total_runs'];
        const total_balls = bowlerStats[bowler]['total_balls'];

        economyOfBowler[bowler] = total_runs / (total_balls / 6);
    }

    const sortEconomy = Object.entries(economyOfBowler).sort(([, a], [, b]) => a - b);

    return sortEconomy.slice(0, 1).reduce((acc, [bowler, economy]) => {
        acc[bowler] = economy;
        return acc;
    }, {});
}

//console.log(economyInSuperOver(deliveriesData));
module.exports = economyInSuperOver;