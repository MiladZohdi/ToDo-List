import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firesbaseConfig";

export async function getTodosApi() {
  let querySnapshot;

  try {
    querySnapshot = await getDocs(collection(db, "ToDos"));
  } catch (error) {
    throw new Error(error.message);
  }

  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return data;
}

export async function addTodoApi(todos) {
  let data;
  try {
    data = await addDoc(collection(db, "ToDos"), {
      ...todos,
      created_at: new Date().toISOString(),
      status: "Pending",
    });
  } catch (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteTodoApi(id) {
  if (id) {
    try {
      await deleteDoc(doc(db, "ToDos", id));
    } catch (error) {
      throw new Error(error.message);
    }
  } else {
    const todos = await getTodosApi();
    const deletePromises = todos.map((document) =>
      deleteDoc(doc(db, "ToDos", document.id))
    );
    try {
      await Promise.all(deletePromises);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export async function updateTodoApi(editData) {
  const { id, ...data } = editData;

  try {
    await updateDoc(doc(db, "ToDos", `${id}`), {
      ...data,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
