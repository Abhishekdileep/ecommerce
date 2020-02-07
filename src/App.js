import React from 'react';
import { Switch , Route , BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
const HatPage = () =>{
   
    return (<div>
      <h1> Hats Page </h1>
    </div>
  )
}
function App(){
  return (
    <div>
      
     <BrowserRouter >
      <Switch >
      <Route exact path='/' component={HomePage}></Route>
      <Route  path='/hats' component={HatPage}></Route>
      </Switch> 
     </BrowserRouter>
    </div>
  )
}
export default App;
 