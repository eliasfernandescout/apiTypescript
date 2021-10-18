import { request, response, Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

import { Category } from '../model/Category';

const categoriesRoutes = Router();
const categoriesList = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const category: Category = {
        name,
        description,
        // id: uuidV4(),
        created_at: new Date(),
    };
    categories.push(category);

    return response.status(201).json({ category }).send();
});

categoriesList.get('/', (request, response) => {
    const listCategory: Category[] = categories;
    return response.send({ listCategory });
});

export { categoriesRoutes, categoriesList };
