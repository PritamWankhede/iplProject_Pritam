const matchesData = require('../csvToJson/matches.json');
const deliveryData = require('../csvToJson/deliveries.json'); 
const files = require('./output.js');

const matchesPlayed = require('../SolutionByHigherOrder/1-MatchesPlayedPerYear');
const matchWonPerYear = require('../SolutionByHigherOrder/2-MatchesWonPerYear');
const ExtraRunByTeam = require('../SolutionByHigherOrder/3-extraRunIn2016');
const topTenEconomicalBowler = require('../SolutionByHigherOrder/4-topTenEconomicalBowler');
const teamWonTossAndMatch = require('../SolutionByHigherOrder/5-teamWonTossAndMatch');
const getTopPlayerOfTheMatchBySeason = require('../SolutionByHigherOrder/6-getTopPlayerOfTheMatchBySeason');
const strikeRateOfBatsman = require('../SolutionByHigherOrder/7-strikeRateOfBatsman');
const PlayerDismissals = require('../SolutionByHigherOrder/8-PlayerDismissals')
const economyInSuperOver = require('../SolutionByHigherOrder/9-economyInSuperOver');



//calling functions
let  matchPlayedPerYear= matchesPlayed(matchesData);
let matchWonPerSeason = matchWonPerYear(matchesData);
let extraRuns = ExtraRunByTeam(matchesData,deliveryData);
let topTenEconomy = topTenEconomicalBowler(matchesData,deliveryData,2015)
let teamWonTossMatch = teamWonTossAndMatch(matchesData);
let highestMatchAward = getTopPlayerOfTheMatchBySeason(matchesData);
let strikeRateOFBatsman = strikeRateOfBatsman(matchesData,deliveryData);
let highestDissmisal = PlayerDismissals(deliveryData);
let superOver  = economyInSuperOver(deliveryData);


//dumpinig to json
let outputDir = "../Public/Output";
files(`${outputDir}1.MatchesPlayedPerYear.json`, matchPlayedPerYear);
files(`${outputDir}2.MatchesWonPerYear.json`, matchWonPerSeason);
files(`${outputDir}3.extraRunIn2016.json`, extraRuns);
files(`${outputDir}4.topTenEconomicalBowler.json`, topTenEconomy);
files(`${outputDir}5.teamWonTossAndMatch.json`, teamWonTossMatch);
files(`${outputDir}6.getTopPlayerOfTheMatchBySeason.json`, highestMatchAward);
files(`${outputDir}7.strikeRateOfBatsman.json`, strikeRateOFBatsman);
files(`${outputDir}8.PlayerDismissals.json`, highestDissmisal);
files(`${outputDir}9.economyInSuperOver.json`,superOver);
