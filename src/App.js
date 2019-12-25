import React from 'react';
import { UserProvider } from "./UserContext";
import UsersList from "./UsersList";
import UserForm from "./UserForm";
import UserNav from "./UserNav";
import "./App.css";

export default function App(){
  return (
    <UserProvider>
      <div className="App">
        <UserNav/>
        <UserForm/>
        <UsersList/>
      </div>
    </UserProvider>
  );
}