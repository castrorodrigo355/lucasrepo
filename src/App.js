import React from 'react';
import { UserProvider } from "./context/UserContext";
import UserNav from "./components/UserNav";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import SelectCities from "./components/SelectOptions";
import UserSqlQuery from "./components/UserSqlQuery";
import "./App.css";

export default function App(){
  return (
    <UserProvider>
      <div className="App">
        <UserNav/>
        <UserForm/>
        <UsersList/>
        <SelectCities/>
        <UserSqlQuery/>
      </div>
    </UserProvider>
  );
}