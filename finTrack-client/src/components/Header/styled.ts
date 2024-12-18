import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonProfile = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme['purple-500']};
  border-radius: 6px;
  color: ${(props) => props.theme['purple-300']};
  line-height: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const ButtonsProfileItem = styled(DropdownMenu.Item)`
  padding: 1rem;
  gap: 1rem;
  color: ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['gray-700']};

  &:first-child {
    border-radius: 6px 6px 0 0;
  }

  &:last-child {
    border-radius: 0 0 6px 6px;
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
    line-height: 0;
    gap: 0.5rem;
    cursor: pointer;
  }
`;

export const ButtonNewTransaction = styled.button`
  height: 40px;
  border: 0;
  background-color: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme['purple-700']};
  }
`;
