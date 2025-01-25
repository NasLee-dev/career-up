import { atom } from "recoil";
import { ConnectionType, MyNetworkType } from "./types";

export const myNetworkAtom = atom<MyNetworkType | null>({
  key: "myNetwork",
  default: null,
});

export const connectionsAtom = atom<ConnectionType[]>({
  key: "connections",
  default: [],
});
