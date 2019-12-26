import React from 'react';
import { UserProvider } from "./UserContext";
import UserNav from "./UserNav";
import UsersList from "./UsersList";
import UserForm from "./UserForm";
import SelectCities from "./SelectCities";
import UserSqlQuery from "./UserSqlQuery";
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