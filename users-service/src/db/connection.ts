import config from "config";
import { Connection, createConnection } from "typeorm";

import User from "./entities/User";
import UserSession from "./entities/UserSession";

let connection: Connection;

export const initConnection = async () => {
  connection = await createConnection({
    entities: [User, UserSession],
    type: "mysql",
    url: <string>config.get("USERS_SERVICE_DB_URL"),
  });
};

const getConnection = () => connection;

export default getConnection;
