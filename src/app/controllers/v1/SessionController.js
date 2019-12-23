import jwt from 'jsonwebtoken';
import User from '../../models/User';
import authConfig from '../../../config/auth';

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    user.comparePassword(password, function(err, isMatch) {
      if (err) throw err;
      const { id, name } = user;
      return res.json({
        user: {
          id,
          name,
          email,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    });
  }
}

export default new SessionController();
