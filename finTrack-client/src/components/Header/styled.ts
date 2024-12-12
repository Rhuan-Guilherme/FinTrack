import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
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
