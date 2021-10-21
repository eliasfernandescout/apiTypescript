import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationsService {
    constructor(private specificationRepository: ISpecificationsRepository) {}

    execute({ name, description }: IRequest): void {
        // const specificationAlreadyExists =
        //     this.specificationRepository.findByName(name);

        // if (categoryAlreadyExists) {
        //     throw new Error('Category already exists!');
        // }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationsService };
