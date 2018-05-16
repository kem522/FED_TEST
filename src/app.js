import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexRoute from './components/IndexRoute';
import ShowRoute from './components/ShowRoute';

import 'bulma/css/bulma.min.css';
import './assets/style.css';

class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <main className="container">
          <Switch>
            <Route path="/:id" component={ShowRoute}/>
            <Route path="/" component={IndexRoute}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
