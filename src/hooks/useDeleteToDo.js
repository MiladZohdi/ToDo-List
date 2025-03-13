import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodoApi } from "../services/todoApi";
import toast from "react-hot-toast";

export default function useDeleteToDo() {
  const queryClient = useQueryClient();

  const { mutate: deleteToDo, isPending: isDeleting } = useMutation({
    mutationFn: deleteTodoApi,
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      toast.success("Todo deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteToDo, isDeleting };
}
