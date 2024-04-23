import getInfo from "./service.js";

const infoController = async (req, res) => {
  const cookie = req.body.cookie;
  try {
    const info = await getInfo(cookie);
    return res.status(200).json(info);
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

export default infoController;
