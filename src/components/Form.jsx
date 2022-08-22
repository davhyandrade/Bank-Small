import {Link} from "react-router-dom";
import { useState } from "react"
import './css/style.css'

export default (props) => {

    const [usuario, setUsuario] = useState();
    const [password, setPassword] = useState();

    function saveUser() {
        props.data(usuario,password)                                                                 
    }
  
    function formUsuario(event) { 
        event.preventDefault();
        console.log(`Nome: ${usuario}\nSenha: ${password}`);
        setUsuario('');
        setPassword('');
    }

    return(
        <>
            <div className="fields" >
                <form onSubmit={formUsuario} onClick={saveUser}>
                    <h1>Login</h1>
                    <label htmlFor="usuario">Nome</label>
                    <input value={usuario || ''} onChange={(event) => setUsuario(event.target.value) } className="input-text" id="usuario" type="text" placeholder="Digite aqui" required />
                    <label htmlFor="password">Senha</label>
                    <input value={password || ''} onChange={(event) => setPassword(event.target.value) } className="input-text" id='password' type="password" placeholder="Digite aqui" required /> 
                    <input className="btn-submit" type="submit"/>
                </form>
            </div>
        </>
    )
}