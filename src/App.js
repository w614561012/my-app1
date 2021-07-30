import React from 'react';

import './App.scss';
import   {Switch,Route,BrowserRouter}    from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'

function App() {
  return (
    <div class="test">
       <h1>adsfsdf</h1>
       <ul>
         <li>fads</li>
        <li>dsad</li>
        <li>dsad</li>
        <li>dsada</li>
       </ul>
        <BrowserRouter>
      <Switch>
        <Route component={Home}  path="/"  ></Route>
        <Route component={About} path="/about"></Route>
      </Switch>
    </BrowserRouter>
    </div>
    

  );
}

export default App;
