import { ICreateUsersDTO } from '../dtos/ICreateUserDTO';

interface IUsersRepository {
    create({
        name,
        email,
        password,
        driver_license,
    }: ICreateUsersDTO): Promise<void>;
}

export { IUsersRepository };
