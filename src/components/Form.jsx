import './css/style.css'

export default (props) => {
    function formUsuario(event) { 
        event.preventDefault();
    }

    return(
        <>
            <div className="fields" >
                <form onSubmit={formUsuario}>
                    <h1>Login</h1>
                    <label htmlFor="usuario">Nome</label>
                    <input onChange={ event => props.setUsuario(event.target.value) } className="input-text" id="usuario" type="text" placeholder="Digite aqui" required />
                    <label htmlFor="password">Senha</label>
                    <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='password' type="password" placeholder="Digite aqui" required /> 
                    <input className="btn-submit" type="submit"/>
                </form>
            </div>
        </>
    )
}