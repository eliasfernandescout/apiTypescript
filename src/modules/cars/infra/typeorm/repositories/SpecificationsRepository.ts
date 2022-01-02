import { getRepository, Repository } from 'typeorm';

import {
    ICreateSpecificationsDTO,
    ISpecificationsRepository,
} from '../../../repositories/ISpecificationsRepository';
import { Specification } from '../entities/Specifications';

class SpecificationRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }
    async create({
        name,
        description,
    }: ICreateSpecificationsDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name });
        return specification;
    }
}

export { SpecificationRepository };
