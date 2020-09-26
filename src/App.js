import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import AccountsPage from "./Components/Account/AccountsPage";
import CategoriesPage from './Components/Categories/CategoriesPage';
import Dashboard from "./Components/Dashboard";
import ExpensesPage from "./Components/Expenses/ExpensesPage"

function App() {
  return (
    <HashRouter> 
      <Switch>
        <Route exact path="/" component={AccountsPage} />
        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="/expenses" component={ExpensesPage} />
        <Route exact path="*" component={Dashboard} />
      </Switch>
    </HashRouter>
  );
}

export default App;
