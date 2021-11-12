import { ICreateUsersDTO } from '../dtos/ICreateUserDTO';

interface IUsersRepository {
    create({
        name,
        username,
        email,
        password,
        driver_license,
    }: ICreateUsersDTO): Promise<void>;
}

export { IUsersRepository };
