import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bulma/css/bulma.css';
import 'bulma-calendar/dist/js/bulma-calendar';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<BrowserRouter>
 <App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
