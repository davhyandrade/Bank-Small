import './css/style.css'

export default (props) => {
    function formUsuario(event) { 
        event.preventDefault();
        props.setFormPreenchido(true);
    }

    return(
        <>
            <div className="fields field-login" >
                <form onSubmit={formUsuario}>
                    <h1>Cadastro Login</h1>
                    <div>
                        <label htmlFor="usuario">Nome</label>
                        <input onChange={ event => props.setUsuario(event.target.value) } className="input-text" id="usuario" type="text" placeholder="Digite o seu usuário" required maxLength='12'/>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='password' type="password" placeholder="Digite a sua senha" required minLength='6' /> 
                    </div>
                    <input className="btn-submit" type="submit"/>
                </form>
            </div>
        </>
    )
}