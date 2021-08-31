// This is a file for sharing functions related to time & date across the website for modularity & reusability

export function getNextSunday(d) {
  /*This method returns to you the next closest sunday given a Date*/
  const result = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  result.setDate(result.getDate() - result.getDay() + 7);
  return result;
};

export function getSundaysByYear(year) {
  /*Method used to create an array that returns every sunday in year for a given year*/
  const date = new Date(year, 0, 1);
  while (date.getDay() != 0) {
    date.setDate(date.getDate() + 1);
  }
  // date is now the first Sunday of the year
  const sundays = [];
  // increment the date by a week till it grabs all Sundays of that year
  while (date.getFullYear() == year) {
    sundays.push(new Date(date));
    date.setDate(date.getDate() + 7);
  }
  return sundays; /*Array of sundays for the year*/
};

export function getChapterNum(d) {
  // get the year of the upcoming Sunday of the given date 
  const upcomingSunday = getNextSunday(d);
  const sundaysOfYear = getSundaysByYear(upcomingSunday.getFullYear());
  // check which number Sunday it is against the list of all Sundays that year
  for (let i = 0; i < sundaysOfYear.length; i++) {
    // use .getTime when comparing dates
    if (sundaysOfYear[i].getTime() === upcomingSunday.getTime()) {
      return i + 1; // chapters start with 1 not 0
    }
  }
  return -1; // error: chapter number not found
};
