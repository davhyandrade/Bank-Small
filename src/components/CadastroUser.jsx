import Loading from './Loading';
import './css/style.css'

export default (props) => {
    function formUsuario(event) {
        event.preventDefault();
        props.setLoading(true);
        setTimeout(() => {
            props.setFormPreenchido(true);
            props.setLoading(false);
        }, 1000)
    }

    return (
        <>
            {props.loading && <Loading/>}
            <div className="field-login" >
                <form onSubmit={formUsuario}>
                    <h1>Conta pessoal</h1>
                    <p>Cadastrar</p>
                    <div>
                        <label htmlFor="usuario">Usuário</label>
                        <input onChange={event => props.setUsuario(event.target.value)} className="input-text" id="usuario" type="text" placeholder="Digite o seu usuário" required maxLength='12' />
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input onChange={event => props.setPassword(event.target.value)} className="input-text" id='password' type="password" placeholder="Digite a sua senha" required minLength='6' />
                    </div>
                    <input className="btn-submit" type="submit" value='Continuar' />
                </form>
            </div>
        </>
    )
}