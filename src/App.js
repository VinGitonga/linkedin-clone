import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from "./components/Login";
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getUserAuth } from './actions'

function App(props) {
    useEffect(() => {
        props.getUserAuth()
    }, [])
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/home">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}


const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({
    getUserAuth: () => dispatch(getUserAuth()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
