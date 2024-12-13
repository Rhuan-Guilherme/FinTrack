import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyles } from './styles/global';
import { Trasnsaction } from './pages/Transactions';
import { Summary } from './components/Summary';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Trasnsaction />
      <Summary />

      <GlobalStyles />
    </ThemeProvider>
  );
}
