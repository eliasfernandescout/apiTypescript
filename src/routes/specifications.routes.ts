import { request, response, Router } from 'express';

import { Specification } from '../modules/cars/model/Specifications';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationsService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationsService(
        specificationRepository,
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).json(createSpecificationService).send();
});

export { specificationsRoutes };
