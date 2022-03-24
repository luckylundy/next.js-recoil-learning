import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

//countの値
export const countState = atom({
  key: "count",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

//userの値
export const userState = atom({
  key: "user",
  default: {
    name: "hoge",
    age: 11,
  },
  effects_UNSTABLE: [persistAtom],
});
