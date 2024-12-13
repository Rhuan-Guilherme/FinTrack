import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styled';

export function Trasnsaction() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 10,000.00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>01/01/2022</td>
            </tr>
            <tr>
              <td width="50%">Pizza</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 200.00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>01/20/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
