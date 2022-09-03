const { averageExams, findMax } = require('../gradeCalculations');

test('it should return exact average', () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
})

test('it should handle non-number ', () => {
    const listValueOfExams = [80, 'a', '100', 80];
    expect(() => averageExams(listValueOfExams)).toThrow();
})

test('should return the max number between 3 arguments', () => {
    expect(findMax(1, 2, 3)).toEqual(3);
    expect(findMax(5, 1, 2)).toEqual(5);
    expect(findMax(102, 404, 48)).toEqual(404);
    expect(findMax(-1, 0, -1)).toEqual(0);
    expect(findMax(2, 2, 2)).toEqual(2);
})