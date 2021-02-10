import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UsersTable from "./components/UserTables";
import User from './components/User'
import Header from './components/Header'
import "./styles.css";
import Users from './components/Users';

export default function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route path="/user/:id"><User/></Route>
    <Route path="/users"><Users/></Route>
     <Route exact path="/"> <UsersTable />  </Route>
    </Switch>
    </>
  );
}
