import { Link } from 'react-router-dom';
import './css/style.css';

export default ({ usuario }) => {
    return(
        <>
            <div className="fields field-landing-page">
                <p>Eae <span>{usuario}</span>,<br /> dboa?</p>
                <img src="https://i.postimg.cc/pLh698r8/codigos.png" id='vetor-codigos' alt="codigos" />
                <img src="https://i.postimg.cc/GmSz1VgP/asdfdfasdfasdf.png" alt="Vetor" />
            </div>
        
            <div className="fields field-option">
                <div className="field-position-option">
                    <div>
                        <img src="https://i.postimg.cc/L8JKT6Bp/banco.png" alt="informacoes" />
                        <div>
                            <p>Guarde e Gerencie suas informações pessoais. <br /><br /> Para isso realize o cadastro de forma fácil e rápida logo abaixo</p>
                            <Link to='/registration-user'>
                                <button>Cadastrar</button>
                            </Link>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h1>CONTA</h1>
                        <p>Bank Little, banco fictício ao qual guarda e gerencia as informações pessoais do usuário</p>
                        <Link to='/login-user'>
                            <button>Entrar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}