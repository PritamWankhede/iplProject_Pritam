const matchesData = require('../csvToJson/matches.json');
const deliveriesData = require('../csvToJson/deliveries.json');
const files = require('./output');

const matchesPlayed = require('../Server/1-numberOfMatchesWon');
const matchWonPerYear = require('../Server/2-numberOfMatchesPerIpl');
const ExtraRunByTeam = require('../Server/3-ExtraRuns');
const bowlerEconomy = require('../Server/4-economicalBowler');
const tossAndMatch = require('../Server/5-teamWonTossAndMatch');
const highestPlayer = require('../Server/6-highestMatchAWard');
const strikeRate = require('../Server/7-strikeRate');
const highestDismissal = require('../Server/8-highestDissmissal');
const economyInSuperOver = require('../Server/9-economyInSuperOver');


//calling functions
let  matchPlayedPerYear= matchesPlayed(matchesData);
let matchWonPerSeason = matchWonPerYear(matchesData);
let extraRuns = ExtraRunByTeam(matchesData,deliveriesData);
let topTenEconomy = bowlerEconomy(matchesData, deliveriesData)
let teamWonTossAndMatch = tossAndMatch(matchesData);
let highestMatchAward = highestPlayer(matchesData);
let strikeRateOFBatsman = strikeRate(matchesData,deliveriesData);
let Dismissals = highestDismissal(deliveriesData);
let superOver  = economyInSuperOver(deliveriesData);


//dumpinig to json
let outputDir = "../Public/Output";
files(`${outputDir}1.numberOfMatchesWon.json`, matchPlayedPerYear);
files(`${outputDir}2.numberOfMatchesPerIpl.json`, matchWonPerSeason);
files(`${outputDir}3.ExtraRuns.json`, extraRuns);
files(`${outputDir}4.economicalBowler.json`, topTenEconomy);
files(`${outputDir}5.teamWonTossAndMatch.json`, teamWonTossAndMatch);
files(`${outputDir}6.highestMatchAWard.json`, highestMatchAward);
files(`${outputDir}7.strikeRate.json`, strikeRateOFBatsman);
files(`${outputDir}8.highestDissmisal.json`, Dismissals);
files(`${outputDir}9.economyInSuperOver.json`,superOver);
