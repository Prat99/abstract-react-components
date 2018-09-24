import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Employees from './container/Employees/Employees';
import { Switch, Route } from 'react-router-dom';
import Register from './container/Register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/register' exact component={Register}></Route>
            <Route path='/' exact component={Employees}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
