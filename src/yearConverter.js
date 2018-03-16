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

export function secondsToVenusYears (seconds) {
  const secondsInAVenusYear = 19414166.4;
  let venusYears = seconds / secondsInAVenusYear;
  return venusYears;
}

export function secondsToMarsYears (seconds) {
  const secondsInAMarsYear = 59354294.4;
  let marsYears = seconds / secondsInAMarsYear;
  return marsYears;
}

export function secondsToJupiterYears (seconds) {
  const secondsInAJupiterYear = 374335776;
  let jupiterYears = seconds / secondsInAJupiterYear;
  return jupiterYears;
}

export function secondsToGalacticYears (seconds) {
  const secondsInAGalacticYear = 20000000000000;
  let galacticYears = seconds / secondsInAGalacticYear;
  return galacticYears;
}

export function lifeExpectanciesConversion (ageInSeconds, lifeExpectancyInSeconds) {
  if (ageInSeconds >= lifeExpectancyInSeconds) {
    return "Congratulations! You've already exceeded your life expectancy!";
  } else {
    let ageDifference = lifeExpectancyInSeconds - ageInSeconds;
    let mercuryYears = secondsToMercuryYears (ageDifference).toFixed(5);
    let venusYears = secondsToVenusYears (ageDifference).toFixed(5);
    let marsYears = secondsToMarsYears (ageDifference).toFixed(5);
    let jupiterYears = secondsToJupiterYears (ageDifference).toFixed(5);
    let outputstring = "Your remaining life expectancy is ".concat(mercuryYears, " Mercury years, or ",
      venusYears, " Venus Years, or ", marsYears, " Mars years, or ", jupiterYears, " Jupiter years.")
    return outputstring;

  }
}
