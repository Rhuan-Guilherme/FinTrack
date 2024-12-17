import { useForm } from 'react-hook-form';
import {
  ButtonLogin,
  FormConteainer,
  InfoView,
  LoginFormContainer,
} from './styled';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserContext } from '../../../../Contexts/UserContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

interface FormProps {
  email: string;
  password: string;
}

const FormLoginSchema = z.object({
  email: z.string().email('Insira um e-mail válido.'),
  password: z.string(),
});

export function LoginForm() {
  const { fetchUsersGetToken, fetchError } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormProps>({
    resolver: zodResolver(FormLoginSchema),
  });

  async function handleSubmitLogin(data: FormProps) {
    const { email, password } = data;

    await fetchUsersGetToken({ email, password });

    reset();
  }

  return (
    <LoginFormContainer>
      <InfoView>
        <h1>
          Entre em <br />
          sua conta
        </h1>
        <p>
          Ainda não tem cadastro?{' '}
          <NavLink to="/user/create">Cadaste-se</NavLink>
        </p>
      </InfoView>

      <FormConteainer onSubmit={handleSubmit(handleSubmitLogin)}>
        <div>
          <label htmlFor="">E-mail</label>
          <input type="text" {...register('email')} />
          {errors && <p>{errors.email?.message}</p>}
        </div>
        <div>
          <label htmlFor="">Senha </label>
          <input type="text" {...register('password')} />
          {fetchError && fetchError.status === 409 ? (
            <p>Usuário ou senha inválidos.</p>
          ) : (
            ''
          )}
        </div>
        <ButtonLogin type="submit" disabled={isSubmitting}>
          ENTRAR
        </ButtonLogin>
      </FormConteainer>
    </LoginFormContainer>
  );
}
