import React from 'react';
import './App.css';
import ProjectsPage from './components/ProjectsPage';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
            <div>
              <Switch>
                <Route path="/projects">
                  <ProjectsPage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
