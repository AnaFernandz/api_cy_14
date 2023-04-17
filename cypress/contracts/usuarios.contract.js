const Joi = require ('joi')

const usuariosSchema = Joi.object({
        _id: Joi.string(), 
        nome: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        admnistrador: Joi.string(),
    })

export default usuariosSchema;