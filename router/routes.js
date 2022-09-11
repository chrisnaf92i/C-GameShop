import express from "express";
import { createArticle, deleteArticle, getAllArticle, getOneArticle, modifyArticle } from "../controller/article.js";
import { login, signin } from "../controller/auth.js";

const router = express.Router();

router.get("/api", (req, res) => {
    res.send("Bienvenu sur l'api de du C-GameShop")
})

router.post("/api/signin", signin);
router.post("/api/login", login);


router.post("/api/article", createArticle);
router.get("/api/article", getAllArticle);
router.get("/api/article/:id", getOneArticle);
router.put("/api/article/:id", modifyArticle);
router.delete("/api/article/:id", deleteArticle);

export default router;