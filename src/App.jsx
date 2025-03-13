import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "./styles/globalStyle";
import AppContainer from "./UI/AppContainer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TodoContextProvider from "./context/TodoContext";
import { useTheme } from "./hooks/useTheme";
import Switch from "./UI/Switch";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      staleTime: 0, // 5 minutes
    },
  });

  const { theme, toggleTheme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <TodoContextProvider>
        <GlobalStyle theme={theme} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Switch toggleTheme={toggleTheme} theme={theme} />
        <AppContainer />
      </TodoContextProvider>
    </QueryClientProvider>
  );
}

export default App;
