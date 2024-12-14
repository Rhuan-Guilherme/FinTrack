import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    outline: none;
    border-radius: 6px;
    border: none;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;

    background-color: transparent;
    border: 1px solid ${(props) => props.theme['purple-300']};
    color: ${(props) => props.theme['purple-300']};
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['purple-500']};
      border: 1px solid ${(props) => props.theme['purple-500']};
      color: ${(props) => props.theme['white']};
      transition: all 0.1s ease-out;
    }
  }
`;
