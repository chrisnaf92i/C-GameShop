import express from "express";
import dotenv from "dotenv";
import router from "./router/routes.js";
import mongoose from "mongoose";


dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect(process.env.MONGOOSE,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use(router);

app.listen(PORT, console.log(`Lancement du serveur sur le port ${PORT}`));