const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createAccount = async (req, res) => {
    try {
        // Validating the req body
        const userSchema = Joi.object ({
            username: Joi.string().required().trim().min(3),
            email: Joi.string().email().required(),
            password: Joi.string().required();
            isAdmin: Joi.boolean().optional().default(false).valid(true,false)
        });

        const {error} = userSchema.validate(req.body);
        if (error) return res.status(404).send(error.details[0].message);

        const user = 
    }
    catch (error){
        
    }
}