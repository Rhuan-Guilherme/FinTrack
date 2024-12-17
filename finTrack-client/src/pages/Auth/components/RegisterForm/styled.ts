import styled from 'styled-components';

export const RegisterFormContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 400px;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
    gap: 0;
  }
`;

export const InfoView = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;

  h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 1;
    padding-bottom: 10px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 41px;
      left: -12px;
      transform: rotate(90deg);
      z-index: -1;
      height: 4px;
      width: 40px;
      background-color: ${(prosp) => prosp.theme['purple-500']};
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 41px;
      left: -5px;
      transform: rotate(90deg);
      z-index: -1;
      height: 4px;
      width: 40px;
      background-color: ${(prosp) => prosp.theme['purple-300']};
    }
  }

  p {
    font-family: 'Roboto' sans-serif;
    color: ${(prosp) => prosp.theme['gray-400']};
  }

  a {
    color: ${(prosp) => prosp.theme['purple-300']};
    text-decoration: underline;
    transition: color 0.3s ease;
  }
`;

export const FormConteainer = styled.form`
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
    padding: 1rem 0.5rem;
    width: 100%;
    border: 1px solid ${(prosp) => prosp.theme['gray-600']};
  }

  p {
    font-family: 'Roboto Mono', sans-serif;
    color: ${(prosp) => prosp.theme['red-300']};
  }
`;

export const ButtonRegister = styled.button`
  background-color: ${(prosp) => prosp.theme['purple-500']};
  color: ${(prosp) => prosp.theme.white};
  font-family: 'Roboto Mono', sans-serif;
  letter-spacing: 1px;
  font-size: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.875rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
