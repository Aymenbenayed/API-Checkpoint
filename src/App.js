import './App.css';
import UserList from './components/UserList/UserList';
import NavBar from './components/NavBar/NavBar'
import { Switch , Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={UserList} />
    </Switch>
    </div>
  );
}
export default App;