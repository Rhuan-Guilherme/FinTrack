import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyles } from './styles/global';
import { TransactionProvider } from './Contexts/TransactionsContext';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './pages/Router';
import { UserProvider } from './Contexts/UserContext';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <UserProvider>
          <TransactionProvider>
            <Router />
          </TransactionProvider>
        </UserProvider>

        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}
