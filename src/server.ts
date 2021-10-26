import express, { response } from 'express';

import { router } from './routes';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();
app.use(express.json());
// require('dotenv').config();
app.use(router);

app.listen(5002, () => {
    console.log('🟣SERVER STARTED ON PORT 5002');
});
