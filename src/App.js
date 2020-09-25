import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import AccountsPage from "./Components/Account/AccountsPage";

function App() {
  return (
    <HashRouter> 
      <Switch>
        <Route exact path="/" component={AccountsPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
