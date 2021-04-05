// import axios from "axios";
import React, { createContext, useReducer } from "react";
// import { toast } from "react-toastify";
import { AppReducer, initialState } from "./AppReducer";

// function getInitialData() {
//   axios
//     .get("/projects")
//     .then((r) => {
//       initialState.projects = r.data;
//     })
//     .catch((e) => {
//       if (e.response.status === 401 || e.response.status === 403) {
//         localStorage.removeItem("token");
//       }
//     });
// }

export const AppContext = createContext();

export const AppProvider = (props) => {
  // getInitialData();
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        projects: state.projects,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
