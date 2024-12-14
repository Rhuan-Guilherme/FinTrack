import * as Dialog from '@radix-ui/react-dialog';
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styled';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <form action="">
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <input type="text" placeholder="Descirção" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcomer" value="outmcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
