import 'react-native';
import {exampleFunction2} from '../src/utils/exampleFunction2';

describe('example function', () => {
  test('returns correct value', () => {
    const expectedResult = {sum: 8, quotient: 3};
    expect(exampleFunction2(6, 2)).toEqual(expectedResult);
    // expect(exampleFunction2(6, 2)).toBe(expectedResult); This test fails
  });
});
