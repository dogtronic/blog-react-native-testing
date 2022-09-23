import SimpleButton from '../src/components/SimpleButton';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../src/styles/theme';

describe('SimpleButton', () => {
  test('renders correctly', () => {
    const simpleButtonRender = renderer
      .create(
        <ThemeProvider theme={theme}>
          <SimpleButton onPress={jest.fn()} label={'Test'} />
        </ThemeProvider>,
      )
      .toJSON();

    expect(simpleButtonRender).toMatchSnapshot();
  });
});
