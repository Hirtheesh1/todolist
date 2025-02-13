import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Todomodel from './models/Todo.js'; // Ensure file extension is included

const app = express();

app.use(cors());
app.use(express.json()); 

await mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.post('/add', (req, res) => {
    const { task } = req.body;
    Todomodel.create({ task })
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
