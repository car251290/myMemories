
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
//https://data.mongodb-api.com/app/data-twguz/endpoint/data/beta
//const CONNECTION_URL = 'mongodb+srv://Javi:love123@cluster0.qhhir.mongodb.net/MemoryProject?';
const CONNECTION_URL = 'mongodb+srv://Javi:us5NVMlN4ihUo1w9@cluster0.qhhir.mongodb.net/MemoryProject?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
