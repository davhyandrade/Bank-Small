import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import CadastroUser from './components/CadastroUser';
import Home from './components/Home';
import LoginUser from './components/LoginUser';
import User from './components/User';
import RegistrationUser from "./components/RegistrationUser";
import './css/style.css';

export default () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [formPreenchido, setFormPreenchido] = useState(false);
    const [isUsuario, setIsUsuario] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        formPreenchido ? (
                            <Navigate replace to="/home" />
                        ) : (
                            <CadastroUser
                                loading={isLoading}
                                setLoading={setIsLoading}
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
                                loading={isLoading}
                                setLoading={setIsLoading}
                                usuario={usuario}
                                password={password}
                                setIsUsuario={setIsUsuario}
                            />
                        )
                    } />
                    <Route path="/user" element={
                        <User
                            usuario={usuario}
                            password={password}
                        />
                    } />
                    <Route path="/registration-user" element={
                        <RegistrationUser 
                            loading={isLoading}
                            setLoading={setIsLoading}
                        />
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
