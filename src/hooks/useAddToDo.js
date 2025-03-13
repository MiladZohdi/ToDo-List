import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodoApi } from "../services/todoApi";
import toast from "react-hot-toast";

export default function useAddToDo() {
  const queryClient = useQueryClient();

  const { mutate: addToDo, isPending: isAdding } = useMutation({
    mutationFn: addTodoApi,
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      toast.success("Todo added successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { addToDo, isAdding };
}
