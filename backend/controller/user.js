const User = require("../model/User");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already registered" });
    }

    user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "sample id",
        url: "sample url",
      },
    });
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
