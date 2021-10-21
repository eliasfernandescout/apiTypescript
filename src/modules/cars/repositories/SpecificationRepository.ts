import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from './ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
    create({ description, name }: ICreateSpecificationDTO): void {
        throw new Error('Method not implemented');
    }
}

export { SpecificationRepository };
