import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from './component/nav_bar.component';
import TableDynamic from './pages/table/table.component';
import ValidationForm from './pages/form/form.component';
import Home from './pages/Home/Home';




function App() {
  return (
    <Router>
            <div className="App">
              <Switch>
                <Route exact path = '/'>
                  <Home/>
                  <Nav />
                  <TableDynamic/>
                </Route>
                <Route path = '/table'>
                <Home/>
                <Nav/>
                  <TableDynamic/>
                </Route>
                <Route path = '/form'>
                <Home/>
                <Nav/>
                <ValidationForm/>
                </Route>

              
              </Switch>    
            </div>
    </Router>
  );
}

export default App;
