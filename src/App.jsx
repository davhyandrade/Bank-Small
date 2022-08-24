import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useState } from "react";
import Form from './components/Form'
import Text from './components/Text'
import './css/style.css'

export default () => {

    const [usuario, setUsuario] = useState();
    const [password, setPassword] = useState();
    
    return(
        <>
            <Router>
                <p>
                    <Link to="/usuario">botao temporario</Link>
                </p>
                <Switch>
                    <Route exact path="/">
                        <Form usuario={usuario} setUsuario={setUsuario} password={password} setPassword={setPassword}></Form>
                    </Route>
                    <Route path="/usuario">
                        <Text usuario={usuario}></Text>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
