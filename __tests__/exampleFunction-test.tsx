import 'react-native';
import {exampleFunction} from '../src/utils/exampleFunction';

describe('example function', () => {
  test('throws an error when second argument is 0', () => {
    expect(() => exampleFunction(1, 0)).toThrow();
  });
  test('throws error with error message that includes divide', () => {
    expect(() => exampleFunction(1, 0)).toThrow('divide');
  });
  test('throws error with correct error message', () => {
    expect(() => exampleFunction(1, 0)).toThrow(/^Can't divide by 0$/);
  });
});
