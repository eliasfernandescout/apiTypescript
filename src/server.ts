import express, { response } from 'express';

import { categoriesRoutes, categoriesList } from './routes/categories.routes';

const app = express();
app.use(express.json());
// require('dotenv').config();

app.use('/categories', categoriesRoutes);
app.use('/categoriesList', categoriesList);

app.listen(5002, () => {
    console.log('🔶SERVER STARTED ON PORT 5002');
});
