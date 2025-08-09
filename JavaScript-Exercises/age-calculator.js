//  Assume user has 90 year life, take his age as input and give output.

function lifeInYears(age) {
  let days = age * 365;

  let weeks = age * 52;

  let months = age * 12;

  let daysLeft = 32850 - days;

  let weeksLeft = 4680 - weeks;

  let monthsLeft = 1080 - months;

  console.log( "You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left, if you are gonna live upto 90 years" );
}

lifeInYears(18);
