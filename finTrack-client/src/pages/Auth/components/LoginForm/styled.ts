import styled from 'styled-components';

export const FormConteainer = styled.form`
  background-color: ${(prosp) => prosp.theme['gray-700']};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 400px;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    border: none;
    background-color: ${(prosp) => prosp.theme['gray-900']};
    color: ${(prosp) => prosp.theme['gray-300']};
    border-radius: 6px;
    padding: 0.5rem;
    width: 100%;
  }
`;

export const ButtonLogin = styled.button`
  background-color: ${(prosp) => prosp.theme['purple-500']};
  color: ${(prosp) => prosp.theme.white};
  font-size: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
