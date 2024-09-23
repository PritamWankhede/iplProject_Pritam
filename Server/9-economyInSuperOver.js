function economyInSuperOver(deliveries) {
    let bowlerStats = {};

    for (const delivery of deliveries) {
        const { is_super_over, bowler, total_runs, wide_runs, noball_runs } = delivery;

        if (is_super_over !== "0") {
            const runsConceded = Number(total_runs);
            const wides = Number(wide_runs);
            const noBalls = Number(noball_runs);
            const legitimateBalls = 1;

            if (!bowlerStats[bowler]) {
                bowlerStats[bowler] = { total_runs: 0, total_balls: 0 };
            }

            bowlerStats[bowler].total_runs += runsConceded;

            if (wides === 0 && noBalls === 0) {
                bowlerStats[bowler].total_balls += legitimateBalls;
            }
        }
    }

    let economyOfBowler = {};

    for (const bowler in bowlerStats) {
        const total_runs = bowlerStats[bowler].total_runs;
        const total_balls = bowlerStats[bowler].total_balls;

        economyOfBowler[bowler] = total_balls > 0 ? total_runs / (total_balls / 6) : 0;
    }

    const sortedEconomy = Object.entries(economyOfBowler).sort(([, a], [, b]) => a - b);

    return sortedEconomy.slice(0, 1).reduce((acc, [bowler, economy]) => {
        acc[bowler] = economy;
        return acc;
    }, {});
}

module.exports = economyInSuperOver;
