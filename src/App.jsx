import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Form from './components/Form'
import Text from './components/Text'
import './css/style.css'

export default () => {
    let data = {
        nome: '',
        senha: ''
    }

    function receiveData(nomeUsuario, senhaUsuario) {
        data = {nome: nomeUsuario, senha: senhaUsuario};
        console.log(data);
    }
    
    return(
        <>
            <Router>
                <Link to="/usuario">temporario</Link>
                <Switch>
                    <Route exact path="/">
                        <Form data={receiveData}></Form>
                    </Route>
                    <Route path="/usuario">
                        <Text usuario={data.nome}></Text>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
