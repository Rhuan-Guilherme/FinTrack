import { Route, Routes, useNavigate } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { AuthContainer, AuthDivider, AuthForm } from './styled';
import logo from '../../assets/logo.svg';
import { RegiserForm } from './components/RegisterForm';
import { useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';

export function Auth() {
  const navigate = useNavigate();
  const { loged } = useContext(UserContext);

  if (loged) {
    navigate('/');
  }
  return (
    <AuthContainer>
      <AuthForm>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/create" element={<RegiserForm />} />
        </Routes>
      </AuthForm>
      <AuthDivider>
        <div>
          <img src={logo} />
          <p>
            Transformando a maneira como você gerencia suas finanças. Organize
            suas receitas, controle seus gastos e alcance seus objetivos com
            praticidade e eficiência.
          </p>
        </div>
      </AuthDivider>
    </AuthContainer>
  );
}
