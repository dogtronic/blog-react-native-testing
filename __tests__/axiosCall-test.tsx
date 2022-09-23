import 'react-native';
import {axiosCall} from '../src/utils/axiosCall';
import axios from 'axios';
beforeAll(() => {
  jest.useRealTimers();
});

//This part is commented out because it does not work when axios is mocked (jest.mock('axios');)

// describe('axios call', () => {
//   test('returns expected value - async await test', async () => {
//     const data = await axiosCall();
//     expect(data).toEqual({age: 61, count: 298219, name: 'michael'});
//   });
//   test('returns expected value - promise', () => {
//     return axiosCall().then(data =>
//       expect(data).toEqual({age: 61, count: 298219, name: 'michael'}),
//     );
//   });
//   test('returns expected value - resolves matcher', () => {
//     return expect(axiosCall()).resolves.toEqual({
//       age: 61,
//       count: 298219,
//       name: 'michael',
//     });
//   });
// });

jest.mock('axios');

describe('axios call mock', () => {
  test('should fetch users', () => {
    const axiosCallResponse = {age: 61, count: 298219, name: 'michael'};
    const mockResponse = {data: axiosCallResponse};
    (axios.get as jest.Mock).mockResolvedValue(mockResponse);
    return axiosCall().then(data => expect(data).toEqual(axiosCallResponse));
  });
});

describe('axios call mockImplementation', () => {
  test('should fetch users', () => {
    const axiosCallResponse = {age: 61, count: 298219, name: 'michael'};
    const mockResponse = {data: axiosCallResponse};
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve(mockResponse),
    );
    return axiosCall().then(data => expect(data).toEqual(axiosCallResponse));
  });
});
