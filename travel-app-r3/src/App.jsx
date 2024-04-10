// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

function App() {
  return (
    <Router>
      <div style={{ height: '700px', width: '393px' }}>
        <Switch>
          <Route exact path="/" component={Screen1} />
          <Route path="/screen2" component={Screen2} />
          <Route path="/screen3" component={Screen3} />
          <Route path="/screen4" component={Screen4} />
        </Switch>
        <div style={{ position: 'fixed', bottom: 0, width: '100%', background: 'lightgray', display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/" style={{ flex: 1, textAlign: 'center', padding: '10px', textDecoration: 'none' }}>Button 1</Link>
          <Link to="/screen2" style={{ flex: 1, textAlign: 'center', padding: '10px', textDecoration: 'none' }}>Button 2</Link>
          <Link to="/screen3" style={{ flex: 1, textAlign: 'center', padding: '10px', textDecoration: 'none' }}>Button 3</Link>
          <Link to="/screen4" style={{ flex: 1, textAlign: 'center', padding: '10px', textDecoration: 'none' }}>Button 4</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
