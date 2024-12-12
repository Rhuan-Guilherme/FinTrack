import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styled';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="./logo.svg" alt="" />
        <ButtonNewTransaction>Nova Transação</ButtonNewTransaction>
      </HeaderContent>
    </HeaderContainer>
  );
}
