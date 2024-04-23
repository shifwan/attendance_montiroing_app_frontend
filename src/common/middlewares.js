export const validateResource = (resourceSchema) => async (req, res, next) => {
  try {
    await resourceSchema.validate(req.body, { strict: true });
    next();
  } catch (e) {
    res.status(400).json({ error: e.errors.join(", ") });
  }
};
