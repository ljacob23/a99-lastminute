import './App.css';
import React from 'react'
import { Link } from 'react-router-dom';
import pizzalogo from './pizzalogo2.jpeg';
import pizzastore from './pizzastore.jpeg';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <h1>Welcome to Pizza Press (Sôst) <img className= "photo" src={pizzalogo} alt="logo"/></h1>
        
       
         
       
      </header>
       <form className="form">
        <label className="label">
        username:
        <input type="text" name="name" />
        </label>
        <label className="label">
         password:
        <input type="text" name="password" />
        </label>
        <input className = "button" type="submit" value="login" />
        <p className="create">Don't have an account yet? 
          <a href="#">Create an account</a>
        </p>
      </form>
     
     <div className="background">
     <img className= "background-photo" src={pizzastore} alt="logo"/>
     </div>
    </div>
  );
}

export default App;
