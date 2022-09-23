import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import TestScreen from '../src/screens/TestScreen';
import {withTheme} from '../src/styles/theme';

describe('TestScreen', () => {
  test('renders correctly', () => {
    const testScreenRender = render(withTheme(<TestScreen />));
    expect(testScreenRender.toJSON()).toMatchSnapshot();
  });
  test('renders correctly after user button press', async () => {
    const testScreenRender = render(withTheme(<TestScreen />));
    const axiosCall = require('../src/utils/axiosCall');
    const mockAxiosCall = jest
      .spyOn(axiosCall, 'axiosCall')
      .mockResolvedValue({age: 70, count: 233482, name: 'michael'});

    fireEvent(testScreenRender.getByTestId('simpleButtonTestID'), 'press');

    await waitFor(() => expect(mockAxiosCall).toHaveBeenCalledTimes(1)).then(
      () => expect(testScreenRender.toJSON()).toMatchSnapshot(),
    );
  });
});
