import { yearToSeconds, differenceDates } from '../src/yearConverter';

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
