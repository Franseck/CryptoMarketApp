import React from 'react'
import AppRouter from './router/AppRouter'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './components/Styled/GlobalStyles/GlobalStyles';
import theme from './components/Styled/GlobalStyles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <AppRouter/>
        </ThemeProvider>
  )
}

export default App