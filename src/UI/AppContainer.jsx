import styled from "styled-components";
import { device } from "../styles/devices";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { getTodosApi } from "../services/todoApi";
import HeaderContainer from "./HeaderContainer";
import TodoHeader from "./TodoHeader";
import Form from "./Form";
import ButtonsContainer from "./ButtonsContainer";
import Table from "./Table";
import { useEffect } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useTheme } from "../hooks/useTheme";
import GlobalStyle from "../styles/globalStyle";
import Switch from "./Switch";

/* eslint react/prop-types: 0 */

const StyledAppContainer = styled.div`
  width: 100rem;
  margin: auto;
  @media ${device.mobileL} {
    width: 90rem;
  }

  @media ${device.mobileM} {
    width: 75rem;
  }

  @media ${device.mobileS} {
    width: 60rem;
  }

  @media ${device.mobileMini} {
    width: 50rem;
  }
`;

function AppContainer() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodosApi,
  });

  const { initialData, showOnlyPendingsDispatch, sort, state } =
    useContext(TodoContext);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (data && state.status === "showOnlyPendings") {
      initialData(data);
      showOnlyPendingsDispatch();
      sort(state.sortType);
    } else if (data) {
      initialData(data);
      sort(state.sortType);
    }
  }, [data]);

  if (error) {
    toast.error(error.message);
    return null;
  }

  return (
    <>
      <GlobalStyle theme={theme} />
      <StyledAppContainer>
        <Switch toggleTheme={toggleTheme} theme={theme} />
        <HeaderContainer>
          <TodoHeader />
          <Form />
          <ButtonsContainer />
        </HeaderContainer>
        <Table isLoading={isLoading} />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "1.6rem",
            },
          }}
        />
      </StyledAppContainer>
    </>
  );
}

export default AppContainer;
