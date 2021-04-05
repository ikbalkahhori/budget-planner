import axios from "axios";
import { toast } from "react-toastify";
// import { addProject } from "./ApiCalls";

export const initialState = {
  projects: [],
};

export const AppReducer = (state, action) => {
  const index = state.projects.findIndex((prj) => prj.id === action.projectId);
  const newList = [...state.projects] || [];

  switch (action.type) {
    case "PENDING_FETCH":
      return {
        ...state,
        isLoading: true,
      };
    case "FINISH_FETCH":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_PROJECTS":
      let prjs = [];
      axios.get("/projects").then((r) => {
        prjs = r.data;
      });
      return {
        ...state,
        projects: prjs,
        isLoading: false,
      };

    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "ADD_PROJECT":
      let newPrj = {};
      axios
        .post("/projects/create", action.payload)
        .then((r) => {
          console.log("Displaying response:");
          console.log(r);
          newPrj = r.data;
        })
        .catch((e) => {
          if (e.response.status === 401) {
            localStorage.removeItem("token");
            toast.error("Session Expired. Please Login again!");
          } else {
            toast.error(`Error: ${e.message}`);
          }
        });
      console.log("Displaying states:");
      console.log(state);
      console.log("Displaying newprj:");
      console.log(newPrj);
      return {
        ...state,
        projects: [...state.projects, newPrj],
        isLoading: false,
      };

    case "DELETE_PROJECT":
      return;

    case "ADD_EXPENSE":
      newList[index].expenses = [...newList[index].expenses, action.payload];
      return {
        ...state,
        projects: newList,
      };
    case "DELETE_EXPENSE":
      newList[index].expenses = newList[index].expenses.filter(
        (exp) => exp.id !== action.payload
      );

      return {
        ...state,
        projects: newList,
      };
    case "SET_BUDGET":
      newList[index].budget = action.payload;

      return {
        ...state,
        projects: newList,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
