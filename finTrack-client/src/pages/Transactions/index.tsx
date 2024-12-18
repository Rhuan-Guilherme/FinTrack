import { useContext, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styled';
import { TransactionsContext } from '../../Contexts/TransactionsContext';
import { dateFormatter, priceFormater } from '../../utils/Formater';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

export function Trasnsaction() {
  const { transactions } = useContext(TransactionsContext);

  const navigate = useNavigate();
  const { loged } = useContext(UserContext);

  useEffect(() => {
    if (!loged) {
      navigate('/user');
    }
  }, [loged, navigate]);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormater.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
