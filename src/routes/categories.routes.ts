import { request, response, Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;
    const categoryAlreadyExists = categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
        return response.status(400).json({ error: 'Category Already Exists' });
    }

    categoriesRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
    const all = categoriesRepository.List();
    return response.json(all);
});

export { categoriesRoutes };
