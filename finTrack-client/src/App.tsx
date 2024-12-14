import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyles } from './styles/global';
import { Trasnsaction } from './pages/Transactions';
import { TransactionProvider } from './Contexts/TransactionsContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Trasnsaction />
      </TransactionProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
}
