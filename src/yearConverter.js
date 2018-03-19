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

export class SecondsConverter {
  constructor(secs) {
    this.seconds = secs;
  }

  toMercuryYears() {
    const secondsInAMercuryYear = 7600521.6;
    let mercuryYears = this.seconds / secondsInAMercuryYear;
    return mercuryYears;
  }

  toVenusYears() {
    const secondsInAVenusYear = 19414166.4;
    let venusYears = this.seconds / secondsInAVenusYear;
    return venusYears;
  }

  toMarsYears() {
    const secondsInAMarsYear = 59354294.4;
    let marsYears = this.seconds / secondsInAMarsYear;
    return marsYears;
  }

  toJupiterYears() {
    const secondsInAJupiterYear = 374335776;
    let jupiterYears = this.seconds / secondsInAJupiterYear;
    return jupiterYears;
  }

  toGalacticYears() {
    const secondsInAGalacticYear = 20000000000000;
    let galacticYears = this.seconds / secondsInAGalacticYear;
    return galacticYears;
  }
}

export function lifeExpectanciesConversion (ageInSeconds, lifeExpectancyInSeconds) {
  if (ageInSeconds >= lifeExpectancyInSeconds) {
    return "Congratulations! You've already exceeded your life expectancy!";
  } else {
    let ageDifference = new SecondsConverter (lifeExpectancyInSeconds - ageInSeconds);
    let mercuryYears = ageDifference.toMercuryYears().toFixed(5);
    let venusYears = ageDifference.toVenusYears().toFixed(5);
    let marsYears = ageDifference.toMarsYears().toFixed(5);
    let jupiterYears = ageDifference.toJupiterYears().toFixed(5);
    let outputstring = "Your remaining life expectancy is ".concat(mercuryYears, " Mercury years, or ",
      venusYears, " Venus Years, or ", marsYears, " Mars years, or ", jupiterYears, " Jupiter years.");
    return outputstring;
  }
}
