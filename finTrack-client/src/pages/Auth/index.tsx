import { Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { AuthContainer, AuthDivider, AuthForm } from './styled';
import logo from '../../assets/logo.svg';
import { RegiserForm } from './components/RegisterForm';

export function Auth() {
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
