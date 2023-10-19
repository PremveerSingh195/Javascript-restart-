let yearToCheck = 2000;

function findingLeapYear(year) {
    return year%4 === 0 && (year%100===0 || year%400===0)
}

if (findingLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is leap year`);
} else {
    console.log(`${yearToCheck} is not leap year `)
}