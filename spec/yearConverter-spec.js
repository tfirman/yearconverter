import { yearToSeconds, differenceDates, secondsToMercuryYears, secondsToVenusYears, secondsToMarsYears, secondsToJupiterYears, lifeExpectanciesConversion } from '../src/yearConverter';

describe('yearToSeconds', function() {
  it('should return 0 if sent a 0', function() {
    let testYears = 0;
    expect(yearToSeconds(testYears)).toEqual(0);
  });
});
describe('yearToSeconds', function() {
  it('should return 315581497.635 if sent a 10', function() {
    let testYears = 10;
    expect(yearToSeconds(testYears)).toEqual(315581497.635);
  });
});
describe('differenceDates', function() {
  it('should return 34214400 if sent two dates a year and 31 days apart', function() {
    let testDate1 = new Date (2011, 0, 1);
    let testDate2 = new Date (2012, 1, 1);
    expect(differenceDates(testDate1, testDate2)).toEqual(34214400);
  });
});
describe('secondsToMercuryYears', function() {
  it('should return 1 if sent 7600521.6 seconds', function() {
    let testsecs = 7600521.6;
    let testsecondsConverter = new secondsConverter(testsecs);
    expect(testsecondsConverter.toMercuryYears()).toEqual(1);
  });
});
describe('secondsToVenusYears', function() {
  it('should return 1 if sent 19414166.4 seconds', function() {
    let testsecs = 19414166.4;
    let testsecondsConverter = new secondsConverter(testsecs);
    expect(testsecondsConverter.toVenusYears()).toEqual(1);
  });
});
describe('secondsToMarsYears', function() {
  it('should return 1 if sent 59354294.4 seconds', function() {
    let testsecs = 59354294.4;
    let testsecondsConverter = new secondsConverter(testsecs);
    expect(testsecondsConverter.toMarsYears()).toEqual(1);
  });
});
describe('secondsToJupiterYears', function() {
  it('should return 1 if sent 374335776 seconds', function() {
    let testsecs = 374335776;
    let testsecondsConverter = new secondsConverter(testsecs);
    expect(testsecondsConverter.toJupiterYears()).toEqual(1);
  });
});

describe('lifeExpectanciesConversion', function() {
  it('should return congratulations if sent an age greater than life expectancy', function() {
    let testAge = 2600000000;
    let testExpect = 2500000000;
    expect(lifeExpectanciesConversion(testAge, testExpect)).toEqual("Congratulations! You've already exceeded your life expectancy!");
  });
});

describe('lifeExpectanciesConversion', function() {
  it('should return a set of converted years if sent an age less than life expectancy', function() {
    let testAge = 1500000000;
    let testExpect = 2500000000;
    expect(lifeExpectanciesConversion(testAge, testExpect)).toEqual("Your remaining life expectancy is 131.56992 Mercury years, or 51.50878 Venus Years, or 16.84798 Mars years, or 2.67140 Jupiter years.");
  });
});
