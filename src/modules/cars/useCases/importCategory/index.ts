import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const importCategoryuseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
    importCategoryuseCase,
);

export { importCategoryController };
