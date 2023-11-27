import User from "../../../../model/user.model.js";

const posts = async (request, response) => {
  const users = await User.getAllUsers();
  response.status(200).json(users);
};

export default posts;
