import UsersService from "#root/adapters/UsersService";
import { UserSessionType } from "#root/graphql/types";

const UserSession = {
  user: async (userSession: UserSessionType) => {
    return await UsersService.fetchUser({ userId: userSession.userId });
  },
};

export default UserSession;
