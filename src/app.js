import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexRoute from './components/IndexRoute';

class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <main className="container">
          <Switch>
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
