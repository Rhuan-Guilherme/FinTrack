import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styled';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../../../Contexts/TransactionsContext';

const SearchFormSchema = z.object({
  query: z.string(),
});

type SearchFormType = z.infer<typeof SearchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormType>({
    resolver: zodResolver(SearchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormType) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Buscar transações..."
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
