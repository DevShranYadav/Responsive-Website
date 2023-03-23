import React from 'react';
import './index.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Components/Footer';
const App = () => {
  

   
   return (
      <>
      <div>
         <Navbar></Navbar>
         <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route  exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route  exact path="/services" component={Services}></Route>
         </Switch>
         <Footer/>
   
      </div>
      
    
      
      </>

   )
}
export default App;