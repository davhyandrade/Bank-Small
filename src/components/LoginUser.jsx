import React, { useRef, useState } from "react";
import Loading from "./Loading";
import './css/style.css';

export default (props) => {
    
    const inputUsuario = useRef();
    const inputPassword = useRef();

    function formUsuario(event) {
        event.preventDefault();
    }

    function verificar() {
        if (inputUsuario.current.value == props.data.usuario && inputPassword.current.value == props.data.senha) {
            props.setLoading(true);
            setTimeout(() => {
                props.setVerifyUser(true);
                props.setIsUsuario(true);
                props.setLoading(false);
            }, 1000)
        } else {
            alert('Senha ou Usuario incorreto')
        }
    }

    return (
        <>
            {props.loading && <Loading/>}
            <div className="field-login" >
                <form onSubmit={formUsuario}>
                    <h1>Faça o seu Login</h1>
                    <p>Entrar</p>
                    <div>
                        <label htmlFor="usuario">Usuário</label>
                        <input ref={inputUsuario} className="input-text" id="usuario" type="text" placeholder="Digite o seu usuário" required maxLength='12' />
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input ref={inputPassword} className="input-text" id='password' type="password" placeholder="Digite a sua senha" required minLength='6' />
                    </div>
                    <input onClick={verificar} className="btn-submit" type="submit" />
                </form>
            </div>
        </>
    )
}