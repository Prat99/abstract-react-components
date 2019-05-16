import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Employees from './container/Employees/Employees';
import { Switch, Route } from 'react-router-dom';
import Register from './container/Register/Register';
import Auth from './container/Auth/Auth';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
class App extends Component {
  render() {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', {});
    // Loop on each calendar initialized
    calendars.forEach(calendar => {
      // Add listener to date:selected event
      calendar.on('date:selected', date => {
        console.log(date);
      });
    });
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/auth' exact component={Auth}></Route>
            <Route path='/register' exact component={Register}></Route>
            <Route path='/' exact component={Employees}></Route>  
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
