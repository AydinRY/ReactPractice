import './App.css';
import Header from './Components/Layouts/Header/Headers';
import Login from './Components/Pages/Login/Login';
import Home from './Components/Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
