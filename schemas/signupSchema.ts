import joi from "joi";

const signupSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
});

export { signupSchema };