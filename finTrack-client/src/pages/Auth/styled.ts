import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: grid;
  height: 100vh;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const AuthForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const AuthDivider = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 6px;
  background-color: ${(prosp) => prosp.theme['gray-700']};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 5rem;
  }

  div img {
    width: 70%;
  }

  div p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${(prosp) => prosp.theme['gray-300']};
    text-align: center;
    line-height: 1.5;
  }
`;
