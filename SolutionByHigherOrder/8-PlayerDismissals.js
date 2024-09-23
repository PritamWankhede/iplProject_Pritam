
// 8)Find the highest number of times one player has been dismissed by another player

function PlayerDismissals(deliveryData) {
    const dismissalData = deliveryData.reduce((acc, delivery) => {
        const { bowler, batsman, dismissal_kind: dismissal } = delivery;

        if (dismissal && dismissal !== "run out") {
            if (!acc[batsman]) {
                acc[batsman] = {};
            }
            if (!acc[batsman][bowler]) {
                acc[batsman][bowler] = 0;
            }
            acc[batsman][bowler]++;
        }
        return acc;
    }, {});

    const result = [];
    for (const batsman in dismissalData) {
        const bowlers = dismissalData[batsman];
        let highestBowler = "";
        let highestCount = 0;

        for (const bowler in bowlers) {
            const count = bowlers[bowler];
            if (count > highestCount) {
                highestCount = count;
                highestBowler = bowler;
            }
        }

        if (highestBowler) {
            result.push({ batsman, bowler: highestBowler, count: highestCount });
        }
    }
    return result;
}

// console.log(PlayerDismissals(deliveryData));
module.exports = PlayerDismissals;
