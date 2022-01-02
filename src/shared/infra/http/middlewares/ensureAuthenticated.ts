import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../../../errors/AppError';
import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UsersRepository';

interface IPayLoad {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token missing', 401);
    }

    const [, token] = authHeader.split(' ');
    try {
        const { sub: user_id } = verify(
            token,
            '603a5801ca5beeb151cdccae35427b04',
        ) as IPayLoad;

        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User does not exists!', 401);
        }
        next();
    } catch {
        throw new AppError('Invalid Token!', 401);
    }
}
