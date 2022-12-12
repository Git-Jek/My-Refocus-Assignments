let calBurnedPerHour = 450;
let totalNumOfRuns = 15;
let totalHoursRunPerDay = 0.5;

let totalHourRuns = totalNumOfRuns * totalHoursRunPerDay;
let totalCalBurned = totalHourRuns * calBurnedPerHour

console.log(`Great work, Sam! After ${totalHoursRunPerDay} hours of running everyday for a week, you may lose a total of ${totalCalBurned} calories.`);