import { describe, expect, test, beforeEach } from 'vitest';
import { RegisterUser } from '../register-user';
import { InMomoryUserRepository } from '@/repositories/im-momory/in-memory-user-repository';

let userRepository: InMomoryUserRepository;
let sup: RegisterUser;

describe('Teste para a criação de novos usuários.', () => {
  beforeEach(() => {
    userRepository = new InMomoryUserRepository();
    sup = new RegisterUser(userRepository);
  });

  test('Deve ser possível criar um novo usuário', async () => {
    const { user } = await sup.execute({
      email: 'Teste',
      name: 'teste@teste.com',
      password: 'teste123',
    });

    expect(user.id).toEqual(expect.any(String));
  });
});
