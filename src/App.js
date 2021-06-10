import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';

function App()
{
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
