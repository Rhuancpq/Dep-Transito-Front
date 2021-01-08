import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './components/Home/Home';
import Proprietarios from './components/Proprietarios/Proprietarios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Toolbar />
          <div style={{marginTop: '3vh'}}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/proprietarios">
                <Proprietarios />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
