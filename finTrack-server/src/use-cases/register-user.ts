import { User } from '@prisma/client';
import { UserRpositotyInterface } from '/@repositories/user-repository-interface';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';

interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

interface RegisterUserResponse {
  user: User;
}

export class RegisterUser {
  constructor(private userRepository: UserRpositotyInterface) {}

  async execute({
    email,
    name,
    password,
  }: RegisterUserRequest): Promise<RegisterUserResponse> {
    const existingUser = await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new UserAlreadyExistsError();
    }

    const user = await this.userRepository.create({
      email,
      name,
      password_hash: password,
    });

    return {
      user,
    };
  }
}
