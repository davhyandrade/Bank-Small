import { Link } from 'react-router-dom';
import './css/style.css';

export default ({ data }) => {
    return(
        <>
            <div className="field-info" >
                <div className='menu-user'>
                    <div className="position-menu-user">
                    <Link to='/home'>Bank Small</Link>
                    <div>
                        <p><span>Usuário:</span> {data.usuario}</p>
                        <p><span>Senha:</span> {data.senha}</p>
                    </div>
                    </div>
                </div>

                <Link to='/home'>
                    <button>Home</button>
                </Link>

                <form className='form-info'>
                    <h1>Informações Usuário</h1>
                    <p>Conta</p>
                    <h3>Dados Pessoais</h3>

                    <div>
                        <label htmlFor="usuario">Nome Completo</label>
                        <input value={data.nome} name='nome' className="input-text-info" id="usuario" type="text" />
                    </div>

                    <div>
                        <label htmlFor="cpf">CPF</label>
                        <input value={data.cpf} name='cpf' className="input-text-info input-40-porcento" id='cpf' type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="Digite um CPF no formato: xxx.xxx.xxx-xx" />
                    </div>

                    <div>
                        <label htmlFor="rg">RG</label>
                        <input value={data.rg} name='rg' className="input-text-info input-40-porcento" id='rg' type="text" pattern='\d{2}\.?\d{3}\.?\d{3}-?\d{1}' title="Digite um RG no formato: xx.xxx.xxx-x" />
                    </div>

                    <div>
                        <label htmlFor="data-nascimento">Data de Nascimento</label>
                        <input value={data.data_nascimento} name='data_nascimento' className="input-text-info input-20-porcento" id='data-nascimento' type="date"/>
                    </div>

                    <div className='sexo'>
                        <label htmlFor="sexo">Sexo</label>
                        <input value={data.sexo} name='signo' className="input-text-info input-30-porcento" id='sexo' type="text" />
                    </div>

                    <div>
                        <label htmlFor="signo">Signo</label>
                        <input value={data.signo} name='signo' className="input-text-info input-40-porcento" id='signo' type="text" />
                    </div>

                    <h3>Filiação</h3>

                    <div>
                        <label htmlFor="mae">Mãe</label>
                        <input value={data.mae} name='mae' className="input-text-info" id='mae' type="text" />
                    </div>

                    <div>
                        <label htmlFor="pai">Pai</label>
                        <input value={data.pai} name='pai' className="input-text-info" id='pai' type="text" />
                    </div>

                    <h3>Online</h3>

                    <div>
                        <label htmlFor="email">E-Mail</label>
                        <input value={data.email} name='email' className="input-text-info" id='email' type="text" />
                    </div>

                    <h3>Endereço</h3>

                    <div>
                        <label htmlFor="cep">CEP</label>
                        <input value={data.cep} name='cep' className="input-text-info input-40-porcento" id='cep' type="text" pattern="\d{5}-\d{3}" title="Digite o CEP no formato: xxxxx-xxx" />
                    </div>

                    <div>
                        <label htmlFor="endereco">Endereço</label>
                        <input value={data.endereco} name='endereco' className="input-text-info" id='endereco' type="text" />
                    </div>

                    <div>
                        <label htmlFor="numero">Número</label>
                        <input value={data.numero} name='numero' className="input-text-info input-40-porcento" id='numero' type="text" />
                    </div>

                    <div>
                        <label htmlFor="bairro">Bairro</label>
                        <input value={data.bairro} name='bairro' className="input-text-info" id='bairro' type="text" />
                    </div>

                    <div>
                        <label htmlFor="cidade">Cidade</label>
                        <input value={data.cidade} name='cidade' className="input-text-info input-40-porcento" id='cidade' type="text" maxLength='30' />
                    </div>

                    <div>
                        <label htmlFor="estado">Estado</label>
                        <input value={data.estado} name='estado' className="input-text-info input-40-porcento" id='estado' type="text" maxLength='15' />
                    </div>

                    <h3>Telefones</h3>

                    <div>
                        <label htmlFor="telefone">Telefone</label>
                        <input value={data.telefone} name='telefone' className="input-text-info input-40-porcento" id='telefone' type="text" pattern="\(\d{2}\) ?\d{4}-\d{4}" title="Digite o Telefone no formato: (xx) xxxx-xxxx" />
                    </div>

                    <div>
                        <label htmlFor="celular">Celular</label>
                        <input value={data.celular} name='celular' className="input-text-info input-40-porcento" id='celular' type="text" pattern="\(\d{2}\) ?\d{5}-\d{4}" title="Digite o Telefone no formato: (xx) xxxxx-xxxx" />
                    </div>

                    <h3>Caracteristicas Físicas</h3>

                    <div>
                        <label htmlFor="altura">Altura</label>
                        <input value={data.altura} name='altura' className="input-text-info input-30-porcento" id='altura' type="number" />
                    </div>

                    <div>
                        <label htmlFor="peso">Peso</label>
                        <input value={data.peso} name='peso' className="input-text-info input-30-porcento" id='peso' type="number" />
                    </div>

                    <div>
                        <label htmlFor="sangue">Tipo Sanguineo</label>
                        <input value={data.tipo_sanguineo} name='tipo_sanguineo' className="input-text-info input-30-porcento" id='sangue' type="text" maxLength='5' />
                    </div>
                </form>
            </div>
        </>
    )
}