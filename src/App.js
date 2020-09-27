import React, { useState } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import AccountsPage from "./Components/Account/AccountsPage";
import CategoriesPage from './Components/Categories/CategoriesPage';
import Dashboard from "./Components/Dashboard";
import ExpensesPage from "./Components/Expenses/ExpensesPage"
import GlobalState from "./Context/GlobalState";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import ReportsPage from "./Components/Reports/ReportsPage";

function App() {
  return (
    <GlobalState>
      <HashRouter> 
        <Header />
        <Switch>
          <Route exact path="/reports" component={ReportsPage} />
          <Route exact path="/accounts" component={AccountsPage} />
          <Route exact path="/categories" component={CategoriesPage} />
          <Route exact path="/categories/:filters" component={CategoriesPage} />
          <Route exact path="/expenses" component={ExpensesPage} />
          <Route exact path="/expenses/:filters" component={ExpensesPage} />
          <Route exact path="*" component={Dashboard} />
        </Switch>
        <Footer />
      </HashRouter>
    </GlobalState>
  );
}

export default App;
