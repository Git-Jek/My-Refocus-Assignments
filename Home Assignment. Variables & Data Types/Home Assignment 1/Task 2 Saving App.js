let SamSavingsGoal = 10000;
let totalSamSaved = 7500;

let totalPercentageSaved = totalSamSaved/SamSavingsGoal * 100;
let totalPercentageAway = 100 - totalPercentageSaved;

console.log(`Thank you for your discipline and hardwork, Sam! You now are ${totalPercentageAway}% away from your goal of saving ${"Php" + SamSavingsGoal}.`);