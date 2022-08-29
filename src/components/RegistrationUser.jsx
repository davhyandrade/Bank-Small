import './css/style.css'

export default (props) => {
    function formUsuario(event) { 
        event.preventDefault();
        props.setFormPreenchido(true);
    }

    return(
        <>
            <div className="fields field-info" >
                <form className='form-info' onSubmit={formUsuario}>
                    <h1>Cadastro Usuário</h1>
                    <h3>Dados Pessoais</h3>
                    <div>
                        <label htmlFor="usuario">Nome Completo</label>
                        <input onChange={ event => props.setUsuario(event.target.value) } className="input-text" id="usuario" type="text" placeholder="Digite o seu usuário" />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='cpf' type="text" placeholder="Digite o seu CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="Digite um CPF no formato: xxx.xxx.xxx-xx" /> 
                    </div>
                    <div>
                        <label htmlFor="rg">RG</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='rg' type="text" placeholder="Digite o seu RG" pattern='\d{2}\.?\d{3}\.?\d{3}-?\d{1}' title="Digite um RG no formato: xx.xxx.xxx-x" /> 
                    </div>
                    <div>
                        <label htmlFor="data-nascimento">Data de Nascimento</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='data-nascimento' type="date" placeholder="Digite a sua data de nascimento" /> 
                    </div>
                    <div className='sexo'>
                        <label htmlFor="sexo">Sexo</label>
                        <select  onChange={ event => props.setPassword(event.target.value) } className="input-text" id='sexo' type="text" placeholder="Digite o seu gênero">
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="signo">Signo</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='signo' type="text" placeholder="Digite o seu signo" /> 
                    </div>
                    <h3>Filiação</h3>
                    <div>
                        <label htmlFor="mae">Mãe</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='mae' type="text" placeholder="Digite o nome da sua Mãe" /> 
                    </div>
                    <div>
                        <label htmlFor="pai">Pai</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='pai' type="text" placeholder="Digite o nome do seu Pai" /> 
                    </div>
                    <h3>Online</h3>
                    <div>
                        <label htmlFor="email">E-Mail</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='email' type="text" placeholder="Digite o seu e-mail" /> 
                    </div>
                    <h3>Endereço</h3>
                    <div>
                        <label htmlFor="cep">CEP</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='cep' type="text" placeholder="Digite o seu CEP" pattern="\d{5}-\d{3}" title="Digite o CEP no formato: xxxxx-xxx" /> 
                    </div>
                    <div>
                        <label htmlFor="endereco">Endereço</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='endereco' type="text" placeholder="Digite o seu endereço" /> 
                    </div>
                    <div>
                        <label htmlFor="numero">Número</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='numero' type="text" placeholder="Digite o número da sua residência" /> 
                    </div>
                    <div>
                        <label htmlFor="bairro">Bairro</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='bairro' type="text" placeholder="Digite o seu bairro" /> 
                    </div>
                    <div>
                        <label htmlFor="cidade">Cidade</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='cidade' type="text" placeholder="Digite a sua cidade" maxLength='15'/> 
                    </div>
                    <div>
                        <label htmlFor="estado">Estado</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='estado' type="text" placeholder="Digite a sua senha"  maxLength='15'/> 
                    </div>
                    <h3>Telefones</h3>
                    <div>
                        <label htmlFor="telefone">Telefone</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='telefone' type="text" placeholder="Digite o número do seu telefone"  pattern="\(\d{2}\) ?\d{4}-\d{4}" title="Digite o Telefone no formato: (xx) xxxx-xxxx" /> 
                    </div>
                    <div>
                        <label htmlFor="celular">Celular</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='celular' type="text" placeholder="Digite o número do seu celular" pattern="\(\d{2}\) ?\d{5}-\d{4}" title="Digite o Telefone no formato: (xx) xxxxx-xxxx"/> 
                    </div>
                    <h3>Caracteristicas Físicas</h3>
                    <div>
                        <label htmlFor="altura">Altura</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='altura' type="number" placeholder="Digite a sua altura" /> 
                    </div>
                    <div>
                        <label htmlFor="peso">Peso</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='peso' type="number" placeholder="Digite o seu peso" /> 
                    </div>
                    <div>
                        <label htmlFor="sangue">Tipo Sanguineo</label>
                        <input onChange={ event => props.setPassword(event.target.value) } className="input-text" id='sangue' type="text" placeholder="Digite a sua senha" maxLength='5'/> 
                    </div>
                    <input className="btn-submit" type="submit"/>
                </form>
            </div>
        </>
    )
}