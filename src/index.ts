import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: "Oie" }));

app.listen(3333);
