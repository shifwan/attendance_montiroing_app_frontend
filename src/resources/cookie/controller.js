import getCookie from "./service.js";

const cookieController = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const cookie = await getCookie(username, password);
    return res.status(200).json(cookie);
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

export default cookieController;
