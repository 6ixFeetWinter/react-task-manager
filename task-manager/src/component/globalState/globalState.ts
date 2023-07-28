import { atom } from "recoil";

export const createTaskState = atom<boolean>({
  key: "createTaskState",
  default: false,
});
export const editTaskState = atom<boolean>({
  key: "editTaskState",
  default: false,
});

export const importTask = atom<any>({
  key: "importTask",
  default: null,
});

export const singleTask = atom<any>({
  key: "singleTask",
  default: {},
});
