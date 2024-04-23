import getAttendance from "./service.js";

const attendanceController = async (req, res) => {
  const cookie = req.body.cookie;
  const year = req.body.year;
  const session = req.body.session;
  try {
    const attendance = await getAttendance(cookie, year, session);
    return res.status(200).json(attendance);
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

export default attendanceController;
