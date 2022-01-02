import { Specification } from '../infra/typeorm/entities/Specifications';

interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}
interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationsDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
