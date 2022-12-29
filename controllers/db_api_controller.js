const db = require('../database/models');
const { User } = db;

const dbApiController = {
  getUsers: async (req, res) => {
    const users = await User.findAll();

    const usersMapped = users.map((user) => {
      return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        detail: `/api/users/${user.id}`

      };
    });

    return res.status(200).json({ count: users.length, users: usersMapped });
  }
};

module.exports = dbApiController;
