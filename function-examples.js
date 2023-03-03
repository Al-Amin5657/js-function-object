function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignment1 = 60;
const assignment2 = 58;
const assignment3 = 59;
const myAverage = getAverage(assignment1, assignment2, assignment3);
console.log(myAverage);