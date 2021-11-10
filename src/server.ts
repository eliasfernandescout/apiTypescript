import express, { response } from 'express';
import swaggerUi from 'swagger-ui-express';

import './database';
import { router } from './routes';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';
import swaggerFile from './swagger.json';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(5002, () => {
    console.log('🟣SERVER STARTED ON PORT 5002');
});
