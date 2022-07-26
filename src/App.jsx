import { Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import Chat from './pages/Chat'
import './App.css';
import { useState } from "react";


function App() {
  const [user, setUser] = useState([]);

  const addUser = (name) => {
    const newUser = {
      id: user.length + 1,
      name: name
    }

    const newUsers = [...user, newUser];
    setUser(newUsers);
  }
  return (
    <Routes>
      <Route path="/" exact={true} element={<Main addUser={addUser} />} />
      <Route path="/chat" element={<Chat user={user}/>} />
    </Routes>
  );
}

export default App;
