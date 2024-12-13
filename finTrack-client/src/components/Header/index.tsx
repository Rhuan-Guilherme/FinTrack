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

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>
              <p>Nova Transação</p>
              <Dialog.Close>x</Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
