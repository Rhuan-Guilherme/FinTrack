import { User } from '@prisma/client';
import { UserRpositotyInterface } from '@/repositories/user-repository-interface';
import { compare } from 'bcryptjs';
import { InvalidCredentialsError } from './errors/invalid-credentials-errors';

interface GetUserRequest {
  email: string;
  password: string;
}

interface GetUserResponse {
  user: User;
}

export class GetUserUseCase {
  constructor(private userRepository: UserRpositotyInterface) {}

  async execute({ email, password }: GetUserRequest): Promise<GetUserResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    const verifyPassword = await compare(password, user.password_hash);

    if (!verifyPassword) {
      throw new InvalidCredentialsError();
    }

    return {
      user,
    };
  }
}
