import './App.css';
import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Property from "./pages/Property"

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/property">  
        <Property/>
      </Route>       
      <Route path="/">
        <Home/>
      </Route>
      <Redirect to='/'/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
