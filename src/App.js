import React, { useState } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import AccountsPage from "./Components/Account/AccountsPage";
import CategoriesPage from './Components/Categories/CategoriesPage';
import Dashboard from "./Components/Dashboard";
import ExpensesPage from "./Components/Expenses/ExpensesPage"
import GlobalState from "./Context/GlobalState";

function App() {
  return (
    <GlobalState>
      <HashRouter> 
        <Switch>
          <Route exact path="/accounts" component={AccountsPage} />
          <Route exact path="/categories" component={CategoriesPage} />
          <Route exact path="/expenses" component={ExpensesPage} />
          <Route exact path="*" component={Dashboard} />
        </Switch>
      </HashRouter>
    </GlobalState>
  );
}

export default App;
