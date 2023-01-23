import Joi from "joi";

export const createPratosSchema = Joi.object({
  nome: Joi.string().required(),
  desc: Joi.string().required(),
  preco: Joi.number().required(),
  tipo: Joi.string().required(),
  
});

