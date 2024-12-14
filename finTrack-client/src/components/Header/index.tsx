import { NewTransactionModal } from '../NewTransactionModal';
import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styled';
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="./logo.svg" alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonNewTransaction>Nova Transação</ButtonNewTransaction>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
