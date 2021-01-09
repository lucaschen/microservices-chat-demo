import bcrypt from "bcryptjs";

const hashPassword = (password: string) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export default hashPassword;
