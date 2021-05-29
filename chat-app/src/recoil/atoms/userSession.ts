import { atom } from "recoil";

const userSessionAtom = atom({
  default: null,
  key: "userSession",
});

export default userSessionAtom;
