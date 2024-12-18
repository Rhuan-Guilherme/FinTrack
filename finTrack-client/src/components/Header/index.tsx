import { useContext } from 'react';
import { NewTransactionModal } from '../NewTransactionModal';
import {
  ButtonNewTransaction,
  ButtonProfile,
  ButtonsContainer,
  ButtonsProfileItem,
  HeaderContainer,
  HeaderContent,
} from './styled';
import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { UserContext } from '../../Contexts/UserContext';
import { Envelope, SignOut, User } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const { data, singout } = useContext(UserContext);

  function singoutUser() {
    singout();
    navigate('/user');
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="./logo.svg" alt="" />

        <ButtonsContainer>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <ButtonProfile
                className="IconButton"
                aria-label="Customise options"
              >
                <User size={22} />
              </ButtonProfile>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content sideOffset={5}>
                <ButtonsProfileItem>
                  <div>
                    <Envelope size={22} />
                    {data?.email}
                  </div>
                </ButtonsProfileItem>
                <ButtonsProfileItem>
                  <div onClick={singoutUser}>
                    <SignOut size={22} />
                    Sair
                  </div>
                </ButtonsProfileItem>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonNewTransaction>Nova Transação</ButtonNewTransaction>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>
        </ButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
