const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp');

const { User } = require('../../models/user');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  try {
    const { path: tempUpload, originalname } = req.file;
    const { _id } = req.user;
    const extention = originalname.split('.').pop();
    const filename = `${_id}.${extention}`;
    const resultUpload = path.join(avatarsDir, filename);
    await fs.rename(tempUpload, resultUpload);
    const file = await Jimp.read(resultUpload);
    await file.resize(250, 250).write(resultUpload);
    const avatarURL = path.join('avatars', filename);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updateAvatar;
