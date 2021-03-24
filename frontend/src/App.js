import React from "react";
import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import ProjectExpense from "./components/ProjectExpense";
import ProjectList from "./components/ProjectList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider } from "./data/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <NavHeader />
        <Switch>
          <Route exact path="/">
            <ProjectList />
          </Route>
          <Route exact path="/projects">
            <ProjectList />
          </Route>
          <Route exact path="/projects/:projectId">
            <ProjectExpense />
          </Route>
          <Route path="/login">
            <h2>Login</h2>
          </Route>
          <Route path="/signup">
            <h2>Sign Up</h2>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppProvider>
  );
};
export default App;
