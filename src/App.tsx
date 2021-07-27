import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from './Components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section className="App container-fluid">
      <Router>
        <Switch>

          <Route exact path="/" component={Products} />

        </Switch>
      </Router>
    </section>
  );
}

export default App;
