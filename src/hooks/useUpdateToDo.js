import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodoApi } from "../services/todoApi";
import toast from "react-hot-toast";

export default function useUpdateToDo() {
  const queryClient = useQueryClient();

  const { mutate: updateToDo, isPending: isUpdating } = useMutation({
    mutationFn: ({ data }) => updateTodoApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      toast.success("Todo updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateToDo, isUpdating };
}
