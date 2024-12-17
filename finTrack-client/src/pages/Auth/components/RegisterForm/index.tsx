import { useForm } from 'react-hook-form';
import {
  ButtonRegister,
  FormConteainer,
  InfoView,
  RegisterFormContainer,
} from './styled';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserContext } from '../../../../Contexts/UserContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

interface FormProps {
  name: string;
  email: string;
  password: string;
}

const FormLoginSchema = z.object({
  name: z.string(),
  email: z.string().email('Insira um e-mail válido.'),
  password: z.string(),
});

export function RegiserForm() {
  const { fetchCreateUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormProps>({
    resolver: zodResolver(FormLoginSchema),
  });

  async function handleSubmitLogin(data: FormProps) {
    const { name, email, password } = data;

    await fetchCreateUser({ name, email, password });

    reset();
  }

  return (
    <RegisterFormContainer>
      <InfoView>
        <h1>
          Crie <br />
          sua conta
        </h1>
        <p>
          Já é membro? <NavLink to="/user">Login</NavLink>
        </p>
      </InfoView>

      <FormConteainer onSubmit={handleSubmit(handleSubmitLogin)}>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" {...register('name')} />
        </div>
        <div>
          <label htmlFor="">E-mail</label>
          <input type="text" {...register('email')} />
        </div>
        <div>
          <label htmlFor="">Senha </label>
          <input type="text" {...register('password')} />
          {errors && <p>{errors.email?.message}</p>}
        </div>
        <ButtonRegister type="submit" disabled={isSubmitting}>
          CRIAR
        </ButtonRegister>
      </FormConteainer>
    </RegisterFormContainer>
  );
}
