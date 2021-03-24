import React, { createContext, useReducer } from "react";

// 5. The reduceer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  const index = state.projectList.findIndex(
    (prj) => prj.id === action.projectId
  );
  const newList = [...state.projectList];
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projectList: [...state.projectList, action.payload],
      };

    case "DELETE_PROJECT":
      return;

    case "ADD_EXPENSE":
      newList[index].expenses = [...newList[index].expenses, action.payload];
      return {
        ...state,
        projectList: newList,
      };
    case "DELETE_EXPENSE":
      newList[index].expenses = newList[index].expenses.filter(
        (exp) => exp.id !== action.payload
      );

      return {
        ...state,
        projectList: newList,
      };
    case "SET_BUDGET":
      newList[index].budget = action.payload;

      return {
        ...state,
        projectList: newList,
      };

    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  projectList: [
    {
      id: "a919758f-a084-45a9-87db-fd36d71fb16c",
      name: "Test Project 0",
      budget: 2000,
      expenses: [
        {
          id: "a60f0c3a-72c9-4c15-9a01-ba96f9e876b2",
          name: "Shopping",
          cost: 50,
        },
        {
          id: "e20bc6d8-3070-45b9-8505-df6dce41e6c5",
          name: "Holiday",
          cost: 300,
        },
        {
          id: "7787f9f9-c74c-43ad-bac0-bb154425ab26",
          name: "Transportation",
          cost: 70,
        },
        { id: "f00874e0-ed39-4bcf-ab4a-33039e851e63", name: "Fuel", cost: 40 },
        {
          id: "4ab9b29a-5dcc-4e56-847e-b82c6876bb44",
          name: "Child Care",
          cost: 500,
        },
      ],
    },
    {
      id: "d5eb35ca-1372-4f51-a48b-00c756f12807",
      name: "Test Project 1",
      budget: 2000,
      expenses: [
        {
          id: "365018fc-9e9d-4405-be84-ba3d4ab45b5f",
          name: "Shopping",
          cost: 50,
        },
        {
          id: "e1e9a58d-5066-4111-a000-6edc6320f91a",
          name: "Holiday",
          cost: 300,
        },
        {
          id: "97aacbbe-e7b6-49ce-97a4-72605dd95238",
          name: "Transportation",
          cost: 70,
        },
        { id: "82043a6d-937e-4ac2-af93-a6315f632a65", name: "Fuel", cost: 40 },
        {
          id: "b28bb85b-a5d8-4e94-81c0-eaded7d762d2",
          name: "Child Care",
          cost: 500,
        },
      ],
    },
    {
      id: "8eca856a-aafd-4ce0-8c7d-c881566f964c",
      name: "Test Project 2",
      budget: 2000,
      expenses: [
        {
          id: "0a8b650a-c37e-4a12-8055-db7be250fb87",
          name: "Shopping",
          cost: 50,
        },
        {
          id: "503b7db6-e8dc-492f-93ad-1362479a96fe",
          name: "Holiday",
          cost: 300,
        },
        {
          id: "811d8fcd-dc47-481d-a9e5-5d0f788582ec",
          name: "Transportation",
          cost: 70,
        },
        { id: "332dd52c-b0d5-45e2-af34-496bdd86d401", name: "Fuel", cost: 40 },
        {
          id: "68a7c636-055c-4b88-ba86-c3eee23f1d51",
          name: "Child Care",
          cost: 500,
        },
      ],
    },
    {
      id: "56385cb5-c996-4cdb-9baa-1ee0ee81f2ce",
      name: "Test Project 3",
      budget: 2000,
      expenses: [
        {
          id: "c696233b-e7de-45d2-b8f3-18419a4e500f",
          name: "Shopping",
          cost: 50,
        },
        {
          id: "31be9c4b-7dca-402a-881c-c22fa2a9cbf7",
          name: "Holiday",
          cost: 300,
        },
        {
          id: "492d9fba-270e-44eb-8ecf-1ec1227889c8",
          name: "Transportation",
          cost: 70,
        },
        { id: "988390ba-5e14-45a5-807d-30a439108abf", name: "Fuel", cost: 40 },
        {
          id: "71777de6-6859-47f9-8725-30b9c96b64da",
          name: "Child Care",
          cost: 500,
        },
      ],
    },
    {
      id: "26dee1c3-b8d4-4192-acd4-14cd9142c596",
      name: "Test Project 4",
      budget: 2000,
      expenses: [
        {
          id: "a8f3a0c3-1a63-4ee9-9622-15291cbcf916",
          name: "Shopping",
          cost: 50,
        },
        {
          id: "755bf158-be16-4fce-96e0-e7ed1ac466c7",
          name: "Holiday",
          cost: 300,
        },
        {
          id: "a6e97059-fc94-420f-846d-6940ba0c3556",
          name: "Transportation",
          cost: 70,
        },
        { id: "e50d9547-12ca-45c0-a8c7-2449ec1dce42", name: "Fuel", cost: 40 },
        {
          id: "fa4f0421-981c-4f5b-8277-2cd83e52dd95",
          name: "Child Care",
          cost: 500,
        },
      ],
    },
  ],
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 5. Returns our context. Pass in the values we want to expose
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        projectList: state.projectList,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
