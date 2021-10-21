import { Request, Response } from 'express';

import { CreateSpecificationsUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
    constructor(
        private createSpecificationUseCase: CreateSpecificationsUseCase,
    ) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createSpecificationUseCase.execute({ name, description });

        return response
            .status(201)
            .json(this.createSpecificationUseCase)
            .send();
    }
}

export { CreateSpecificationController };
