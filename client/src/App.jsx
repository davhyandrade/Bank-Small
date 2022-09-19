import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import CadastroUser from './components/CadastroUser';
import Home from './pages/Home';
import LoginUser from './components/LoginUser';
import User from './pages/User';
import RegistrationUser from "./pages/RegistrationUser";
import './components/css/style.css';

export default () => {
    const [data, setData] = useState('');

    const handleChangeData = (data) => {
        setData((prevData) => ({
            ...prevData,
            [data.target.name]: data.target.value,
        }))
    } 

    const [formPreenchido, setFormPreenchido] = useState(false);
    const [isUsuario, setIsUsuario] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isData, setIsData] = useState(false);

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
                                setFormPreenchido={setFormPreenchido}
                                handleChangeData={handleChangeData}
                                data={data}
                            />
                        )
                    } />
                    <Route path="/home" element={
                        <Home 
                            data={data}
                            isData={isData} 
                            setFormPreenchido={setFormPreenchido}
                        />
                    } />
                    <Route path="/login-user" element={
                        isUsuario ? (
                            <Navigate replace to="/user" />
                        ) : (
                            <LoginUser
                                loading={isLoading}
                                setLoading={setIsLoading}
                                data={data}
                                setIsUsuario={setIsUsuario}
                            />
                        )
                    } />
                    <Route path="/user" element={
                        <User
                            data={data}
                        />
                    } />
                    <Route path="/registration-user" element={
                        formPreenchido ? (
                            <Navigate replace to="/home" />
                        ) : (
                            <RegistrationUser 
                                loading={isLoading}
                                setLoading={setIsLoading}
                                handleChangeData={handleChangeData}
                                setFormPreenchido={setFormPreenchido}
                                data={data}
                                setIsData={setIsData}
                            /> 
                        )
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
