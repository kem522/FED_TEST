import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexRoute from './components/IndexRoute';
import ShowRoute from './components/ShowRoute';
import Header from './components/Header';

import 'bulma/css/bulma.min.css';
import './assets/style.css';

class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <section>
          <Header />
          <main className="container">
            <Switch>
              <Route path="/:id" component={ShowRoute}/>
              <Route path="/" component={IndexRoute}/>
            </Switch>
          </main>
        </section>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
