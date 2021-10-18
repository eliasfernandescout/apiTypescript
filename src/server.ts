import express, { response } from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());
// require('dotenv').config();

app.use(categoriesRoutes);

app.listen(5002, () => {
    console.log('🔶SERVER STARTED ON PORT 5002');
});
