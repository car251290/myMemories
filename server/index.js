
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts',postRoutes);

//const CONNECTION_URL = `mongodb+srv://javicarjc:Carjavi251290@cluster0.2zaff.mongodb.net/<dbname>?retryWrites=true&w=majority`;
//Carjavi251290


//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://javicarjc:<password>@cluster0.2zaff.mongodb.net/<dbname>?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
//});
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);