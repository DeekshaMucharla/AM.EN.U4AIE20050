import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TrainList from './components/TrainList';
import TrainDetail from './components/TrainDetail';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={TrainList} />
          <Route path="/train/:trainNumber" component={TrainDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
