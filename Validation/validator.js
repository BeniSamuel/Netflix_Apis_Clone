const Joi = require("joi");

exports.signupValidator = async (req,res,next) =>{
    const userSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const {error} = userSchema.validate(req.body);

    if (error) return res.status(400).send({ message: error.details[0].message});

    next();
}

exports.loginValidator = async (req, res, next) => {
    const userSchema = Joi.object({
        email: Joi.string().email().$
        
        required(),
        password: Joi.string().required()
    })
}