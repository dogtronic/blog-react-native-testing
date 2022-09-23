import React, {ReactElement} from 'react';
import * as styledComponents from 'styled-components/native';

type colors = {
  system: {
    tokenOnWhite: string;
    tokenGreen: string;
    tokenGreen60: string;
    tokenGreen30: string;
    tokenGreen10: string;
    tabBarBorder: string;
  };
  text: {
    black: string;
    darkGrey: string;
    grey: string;
    lightGrey: string;
    highlightGrey: string;
    white: string;
  };
  status: {
    dangerous: string;
    bad: string;
    good: string;
  };
  background: {
    light: string;
    dark: string;
  };
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: colors;
  }
}

export const theme: styledComponents.DefaultTheme = {
  colors: {
    system: {
      tokenOnWhite: '#14CA85',
      tokenGreen: '#00E69D',
      tokenGreen60: '#6FFFE3',
      tokenGreen30: '#B9FFE8',
      tokenGreen10: '#E7FFF7',
      tabBarBorder: '#E2E3E4',
    },
    text: {
      black: '#000000',
      darkGrey: '#36354A',
      grey: '#686777',
      lightGrey: '#B3B5BD',
      highlightGrey: '#D2D2D7',
      white: '#FFFFFF',
    },
    status: {
      dangerous: '#FF0000',
      bad: '#FF6B00',
      good: '#15AA2C',
    },
    background: {
      light: '#FFFFFF',
      dark: '#F8F8FA',
    },
  },
};

export type ThemeInterface = typeof theme;

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeInterface>;

const withTheme = (element: ReactElement) => {
  <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export {styled, css, ThemeProvider, withTheme};
