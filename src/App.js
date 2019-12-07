import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav";
import Form from "./components/Form";
import Users from "./components/Users";
import service from "./services/Service";
import "./App.css";

export default function App() {

  const[users, setUsers] = useState([])

  useEffect(async () => {
    const users = await service.getUsers();
    setUsers(users)
  },[])

  const onDeleteUser = idUser => setUsers(users.filter(user => user.id !== idUser))

  return (
      <div style={{textAlign:"center"}}>
        <Nav/>
        <hr/>
        <Form/>
        <hr/>
        <Users myUsers={users} onDeleteUser={onDeleteUser}/>
        
      </div>
  );
}