import { useRef } from "react";
import './css/style.css';

export default (props) => {
    const inputUsuario = useRef();
    const inputPassword = useRef();

    function formUsuario(event) { 
        event.preventDefault();
    }

    function verificar() {
        if(inputUsuario.current.value == props.usuario && inputPassword.current.value == props.password) {
            props.setIsUsuario(true);
        } else {
            alert('Senha ou Usuario incorreto')
        }
    }
    
    return(
        <>
            <div className="fields field-login" >
                <form onSubmit={formUsuario}>
                    <h1>Login</h1>
                    <div>
                        <label htmlFor="usuario">Nome</label>
                        <input ref={inputUsuario} className="input-text" id="usuario" type="text" placeholder="Digite o seu usuário" required maxLength='12'/>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input ref={inputPassword} className="input-text" id='password' type="password" placeholder="Digite a sua senha" required minLength='6' /> 
                    </div>
                    <input onClick={verificar} className="btn-submit" type="submit"/>
                </form>
            </div>
        </>
    )
}