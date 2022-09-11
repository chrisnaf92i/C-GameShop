import userModel from "../model/user.js";
import bcrypt from "bcrypt"

export const signin = (req, res) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const newUser = new userModel({
                ...req.body, password:hash
            })
            newUser.save()
                .then(() => {
                    res.status(201).send("création d'un compte")
                })
                .catch(err => {
                    res.status(500).json(err);
                })
        })

}


export const login = (req, res) => {
    userModel.findOne({email:req.body.email})
        .then(user => {
            if(!user) {
                return res.status(401).send("Utilisateur non trouvé")
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid){
                        return res.status(401).send("Email ou mot de passe invalide");
                    }
                    res.status(200).json({userId:user._id, token:"TOKEN"})
                })
                .catch(err => {
                    res.status(500).json(err)
                })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}
