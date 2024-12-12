import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyles } from './styles/global';
import { Trasnsaction } from './pages/Transactions';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Trasnsaction />

      <GlobalStyles />
    </ThemeProvider>
  );
}
