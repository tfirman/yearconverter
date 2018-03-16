export function yearToSeconds(years) {
  const secondsInAnEarthYear = 31558149.7635;
  let seconds = secondsInAnEarthYear * years;
  return seconds;
}

export function differenceDates (date1, date2) {
  let date1TotalSecs = .001 * date1.getTime();
  let date2TotalSecs = .001 * date2.getTime();
  let differenceSecs = date2TotalSecs - date1TotalSecs;
  return differenceSecs;
}

export function secondsToMercuryYears (seconds) {
  const secondsInAMercuryYear = 7600521.6;
  let mercuryYears = seconds / secondsInAMercuryYear;
  return mercuryYears;
}
