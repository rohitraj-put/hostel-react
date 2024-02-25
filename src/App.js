import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from './pages/ContactPage';


function App() {

  return (
    <>
      <div className="App">
        <Router>
          <NavBar logoUrl={'https://static.wixstatic.com/media/01858d_4a79d7b5c6064a4eb1d6d8d055661387~mv2.png/v1/fit/w_2500,h_1330,al_c/01858d_4a79d7b5c6064a4eb1d6d8d055661387~mv2.png'} />

          <Switch>
            <Route exact path="/aboutpage">
              <AboutPage />
            </Route>
            <Route exact path="/gallerypage">
              <GalleryPage />
            </Route>
            <Route exact path="/contactpage">
              <ContactPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>

    </>
  );
}

export default App;
