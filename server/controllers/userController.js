const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({
        msg: "Incorrect Username or Password",
        status: false,
      });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({
        msg: "Incorrect Username or Password",
        status: false,
      });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

// module.exports.getAllUsers = async (req, res, next) => {
//   try {
//     const users = await User.find({ _id: { $ne: req.params.id } }).select([
//       "email",
//       "username",
//       "avatarImage",
//       "_id",
//     ]);
//     return res.json(users);
//   } catch (ex) {
//     next(ex);
//   }
// };

module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(
      userId,
      {
        isAvatarImageSet: true,
        avatarImage,
      },
      { new: true }
    );
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (ex) {
    next(ex);
  }
};
// module.exports.forgetpass = (req, res, next) => {

// };
module.exports.forgetpass = async (req, res, next) => {
  try {
    const { email } = req.body;

    // 1. Check if the email exists in the database
    const user = await User.findOne({ email });

    // If the user doesn't exist, send an appropriate response
    if (!user) {
      return res.json({
        msg: "User with this email does not exist",
        status: false,
      });
    }

    // 2. Generate a unique reset token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // 3. Set the reset token and expiration time for the user
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    // 4. Save the user with the reset token and expiration time
    await user.save();

    // 5. Send a reset link to the user's email
    const transporter = nodemailer.createTransport({
      // Configure your email service (e.g., Gmail, SendGrid)
      // ...
    });

    const mailOptions = {
      from: "your_email@example.com",
      to: user.email,
      subject: "Password Reset",
      text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      ${req.protocol}://${req.get("host")}/reset/${resetToken}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    await transporter.sendMail(mailOptions);

    // 6. Send a response indicating that the reset link has been sent
    return res.json({
      msg: "Password reset link sent to your email. Please check your inbox.",
      status: true,
    });
  } catch (ex) {
    // 7. Handle any errors that occur during the process
    next(ex);
  }
};

module.exports.logOut = (req, res, next) => {
  try {
    if (!req.params.id) return res.json({ msg: "User id is required " });
    onlineUsers.delete(req.params.id);
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }
};
