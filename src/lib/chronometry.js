// This is a file for sharing functions related to time & date across the website for modularity & reusability

// function returning the next closest Sunday of given a Date
export function getNextSunday(d) {
  const result = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  result.setDate(result.getDate() - result.getDay() + 7);
  return result;
};

// function creating an array containing every sunday in a given year
export function getSundaysByYear(year) {

  // make date the first Sunday of the given year
  const date = new Date(year, 0, 1);
  while (date.getDay() != 0) {
    date.setDate(date.getDate() + 1);
  }

  // increment the date by a week until it grabs all Sundays of that year
  const sundays = [];
  while (date.getFullYear() == year) {
    sundays.push(new Date(date));
    date.setDate(date.getDate() + 7);
  }

  return sundays;
};

// function returning a number corresponding to the chapter for the upcoming Sunday of a given date
export function getChapterNum(d) {

  // get the all Sundays in the year of the upcoming Sunday of the given date 
  const upcomingSunday = getNextSunday(d);
  const sundaysOfYear = getSundaysByYear(upcomingSunday.getFullYear());
  
  // get the index of the matching Sunday (using .getTime()) in all Sundays that year and add by one to get the chapter
  // returns 0 if not found (error)
  return sundaysOfYear.findIndex(sunday => sunday.getTime() === upcomingSunday.getTime()) + 1;
};
