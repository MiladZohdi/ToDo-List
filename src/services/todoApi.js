import { collection, getDocs, getFirestore } from "firebase/firestore";
import supabase from "./supabase";
import app from "./firesbaseConfig";

// export async function getTodosApi() {
//   let { data: Todo, error } = await supabase.from("Todo").select("*");

//   if (error) {
//     console.error(error);
//     throw new Error("An error occurred while fetching todos");
//   }

//   return Todo;
// }

export async function getTodosApi() {
  let querySnapshot;
  const db = getFirestore(app);
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
  const { data, error } = await supabase
    .from("Todo")
    .insert([{ ...todos, status: "Pending" }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("An error occurred while adding todo");
  }
  return data;
}

export async function deleteTodoApi(id) {
  let query = supabase.from("Todo").delete();

  id ? (query = query.eq("id", id)) : query.gt("id", 0);

  const { error } = await query;

  if (error) {
    console.error(error);
    throw new Error("An error occurred while deleting todo");
  }
}

export async function updateTodoApi(editData) {
  const { id, ...eData } = editData;

  const { data, error } = await supabase
    .from("Todo")
    .update({ ...eData })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("An error occurred while updating todo");
  }
  return data;
}
