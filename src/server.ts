import express, { response } from 'express';

const app = express();
app.use(express.json());
// require('dotenv').config();

app.get('/', (request, response) => {
    response.json({ message: 'Hello App' });
});

app.post('/courses', (request, response) => {
    const { name } = request.body;
    return response.json({ name });
});

app.listen(5002, () => {
    console.log('🔶SERVER STARTED ON PORT 5002');
});
