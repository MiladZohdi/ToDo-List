import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppContainer from "./UI/AppContainer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TodoContextProvider from "./context/TodoContext";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      staleTime: 0, // 5 minutes
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TodoContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <AppContainer />
      </TodoContextProvider>
    </QueryClientProvider>
  );
}

export default App;
