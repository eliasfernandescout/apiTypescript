import { compare } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../repositories/IUsersRepositories';

interface IRequest {
    email: string;
    password: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}
    async execute({ email, password }: IRequest) {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new Error('Email or Password is incorrect!');
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Email or Password is incorrect!');
        }
    }
}

export { AuthenticateUserUseCase };
