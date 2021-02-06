import config from "config";
import got from "got";

const USERS_SERVICE_URI = <string>config.get("USERS_SERVICE_URI");

export interface User {
  createdAt: string;
  id: string;
  username: string;
}

export interface UserSession {
  createdAt: string;
  expiresAt: string;
  id: string;
  userId: string;
}

export default class UsersService {
  static async fetchUser({ userId }: { userId: string }): Promise<User | null> {
    const body = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json();
    if (!body) return null;
    return <User>body;
  }

  static async fetchUserSession({ sessionId }: { sessionId: string }): Promise<UserSession | null> {
    const body = await got.get(`${USERS_SERVICE_URI}/sessions/${sessionId}`).json();
    if (!body) return null;
    return <UserSession>body;
  }
}
