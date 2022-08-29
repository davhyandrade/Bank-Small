import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Form from './components/Form'
import Home from './components/Home'
import LoginUser from './components/LoginUser'
import User from './components/User'
import './css/style.css'
import RegistrationUser from "./components/RegistrationUser";

export default () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [formPreenchido, setFormPreenchido] = useState(false);
    const [isUsuario, setIsUsuario] = useState(false);
    
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        formPreenchido ? (
                            <Navigate replace to="/home" />
                        ) : (  
                            <Form 
                                setUsuario={setUsuario}
                                setPassword={setPassword}
                                setFormPreenchido={setFormPreenchido}
                            />
                        )
                    } />
                    <Route path="/home" element={
                        <Home usuario={usuario} />
                    } />
                    <Route path="/login-user" element={
                        isUsuario ? (
                            <Navigate replace to="/user" />
                        ) : (
                            <LoginUser 
                                usuario={usuario}
                                password={password} 
                                setIsUsuario={setIsUsuario}
                            />
                        )
                    } />
                    <Route path="/user" element={
                        <User />
                    } />
                    <Route path="/registration-user" element={
                        <RegistrationUser />
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
