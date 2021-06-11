import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Checkout from "./Checkout";
import { auth } from './firebase';
import Header from './Header';
import Home from "./Home";
import Login from './Login';
import Payment from './Payment';
import { useStateValue } from './Stateprovider';

const promise = loadStripe("pk_test_51J0uTeSDQP9twc8tN6QOKaTDxiO7xxUGooDXXZgKCfG8wBJCH8x77Uyv5Kn6rNwZcDsRybj3IzpXJZjLTn1sKxg500eHoyHdRy");

function App() {
  const [ {},  dispatch] = useStateValue();
  useEffect(() =>{
    auth.onAuthStateChanged(authUser => {
      console.log("The user is  >>> " , authUser);

      if(authUser){
        // the user just logged in/ the user was logged in.. 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // the user  is log out.
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [] )
  return (
    <Router>
      
    <div className="app">
    
      <Switch>
      <Route path ="/login">
          <Login />
        </Route>
      <Route path ="/checkout">
      <Header />
          <Checkout/>
        </Route>
        <Route path ="/payment">
      <Header />
      <Elements stripe ={promise}>
      <Payment />
      </Elements>
     
        </Route>
        <Route path ="/">
        <Header />
          < Home />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
