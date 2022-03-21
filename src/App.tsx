import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Route path='/'>
        <Header />
      </Route>
    </Router>
  );
}

export default App;
