import { IResolversParameter } from "apollo-server";
import User from "../models/User";

const UserResolvers: IResolversParameter = {
  Query: {
    user: async (_, { id }) => {
      const user = await User.findByPk(id);
      return user;
    },
    users: async () => {
      const users = await User.findAll();
      return users;
    },
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      const user = await User.create({ name, email });
      return user;
    },
    updateUser: async (_, { id, name, email }) => {
      const user = await User.findByPk(id);

      if (!user) return {};

      await user.update({ name, email });
      return user;
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByPk(id);

      if (!user) return false;

      await user.destroy();

      return true;
    },
  },
};

export default UserResolvers;
