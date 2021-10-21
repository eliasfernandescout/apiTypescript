import { request, response, Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

import { Category } from '../modules/cars/model/Category';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
    
});

categoriesRoutes.get('/', (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all);
});

export { categoriesRoutes };
