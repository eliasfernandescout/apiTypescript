import express from 'express';

const app = express();
require("dotenv").config();

app.get('/', (request, response) => {
    response.json({ message: "Hello App" });
});

app.post('/', (request, response) => {});

app.listen(process.env.PORT, () => {
    console.log("🟠 SERVER STARTED ON PORT 5002");
});
