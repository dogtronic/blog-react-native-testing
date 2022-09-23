import React from 'react';
import TestScreen from './src/screens/TestScreen';
import {theme, ThemeProvider} from './src/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TestScreen />
    </ThemeProvider>
  );
};

export default App;
