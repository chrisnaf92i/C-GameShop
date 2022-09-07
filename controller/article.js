import articleModel from "../model/article.js"

export const createArticle = (req, res) => {
    const newArticle = new articleModel(req.body);

    newArticle.save()
        .then(() => {
            res.status(201).send("création de l'article réussie")
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const getAllArticle = (req, res) => {
    articleModel.find()
        .then(articles => {
            res.status(200).json(articles)
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

export const getOneArticle = (req, res) => {
    const id = req.params.id;

    articleModel.findOne({_id:id})
        .then(article => {
            res.status(200).json(article)

        })
}

export const modifyArticle = (req, res) => {

}

export const deleteArticle = (req, res) => {
    const id = req.params.id;

    articleModel.findOneAndDelete({_id:id})
        .then(() => {
            res.status(200).send("article supprimer")

        })
        .catch(err => {
            res.status(500).json(err)
        })
}