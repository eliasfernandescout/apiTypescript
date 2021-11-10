import { Request, Response } from 'express';

import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase';

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCase };
