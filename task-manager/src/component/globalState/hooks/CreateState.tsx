import { useRecoilState } from "recoil";
import {
  createTaskState,
  editTaskState,
  importTask,
  singleTask,
} from "../globalState";
import {
  Timestamp,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect } from "react";
export const useCreate = () => {
  const [isCreate, setIsCreate] = useRecoilState(createTaskState);
  const isCreateActive = () => {
    setIsCreate(true);
  };
  const isCreateNegative = () => {
    setIsCreate(false);
  };
  return { isCreate, isCreateActive, isCreateNegative };
};
export const useEdit = () => {
  const [isEdit, setIsEdit] = useRecoilState(editTaskState);
  const isEditActive = () => {
    setIsEdit(true);
  };
  const isEditNegative = () => {
    setIsEdit(false);
  };
  return { isEdit, isEditActive, isEditNegative };
};

export const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { date, year, month, day };
};

export const GetTask = () => {
  const [list, setList] = useRecoilState(importTask);

  useEffect(() => {
    const q = query(collection(db, "task"), orderBy("created", "asc"));
    const data = onSnapshot(q, (snapShot) => {
      setList(snapShot.docs.map((doc) => doc.data()));
    });
  }, []);

  return { list: list || [] };
};

export const Update = () => {
  const updateStatus = (path: string) => {
    updateDoc(doc(db, "task", path), {
      status: true,
    });
  };
  const deleteTask = async (path: string) => {
    await deleteDoc(doc(db, "task", path));
  };
  const uploadTask = (data: any, date: string, time: string | null) => {
    const ref = collection(db, "task");
    const id = doc(ref).id;
    const formatTime = time ?? "00:00";
    setDoc(doc(db, "task", id), {
      title: data.title,
      name: data.name,
      limit: date,
      time: formatTime,
      created: Timestamp.now(),
      status: false,
      id: id,
      other: data.other,
    });
  };
  const updateContent = (
    data: any,
    date: string,
    time: string | null,
    task: any
  ) => {
    const formatTime = time ?? "00:00";
    updateDoc(doc(db, "task", task.id), {
      title: data.title,
      name: data.name,
      limit: date,
      time: formatTime,
      created: task.created,
      status: task.status,
      id: task.id,
      other: data.other,
    });
  };
  return { updateStatus, deleteTask, uploadTask, updateContent };
};

export const EditTask = () => {
  const [task, setTask] = useRecoilState(singleTask);
  const getSingleTask = async (path: string) => {
    const q = await getDoc(doc(db, "task", path));
    setTask(q.data());
  };
  return { task, getSingleTask };
};
