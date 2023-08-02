import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Components/LoginPage';
import { BrowserRouter, Route, Link, useLocation,Router,Routes } from "react-router-dom";
import DashBoard from './Components/DashBoard';
import { useState } from 'react';


function App() {
  const [username,setUsername] = useState("");

  return (
    <BrowserRouter>
        <Routes>
                <Route exact path='/Dashboard' element={<DashBoard username={username}/>}/>
                <Route exact path='/' element={<LoginPage username={username} setUsername={setUsername}/>}/>
        </Routes>
        
      
    </BrowserRouter>
  );
}


export default App;
