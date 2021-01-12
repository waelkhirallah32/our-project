import React from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Home from './pages/HomePage/Home';
import Membres from './pages/MembrePage/Membres';
import Maisons from './pages/MaisonPage/Maisons';
import Services from './pages/Services/Services';
import './App.css';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component ={Home}/>
      <Route path='/membres' component={Membres}/>
      <Route path='/home' component={Maisons}/>
      <Route path='/service client' component={Services}/>
      </Switch> 
     
    </Router>

  );
}

export default App;
