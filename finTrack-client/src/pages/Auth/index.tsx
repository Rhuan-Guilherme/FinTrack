import { LoginForm } from './components/LoginForm';
import { AuthContainer, AuthDivider, AuthForm } from './styled';

export function Auth() {
  return (
    <AuthContainer>
      <AuthForm>
        <LoginForm />
      </AuthForm>
      <AuthDivider>
        <div>
          <img src="./logo.svg" />
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
