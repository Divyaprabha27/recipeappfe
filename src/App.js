import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Submit from './components/Submit';
import Dashboard from "./components/Dashboard";
import RecipeDetails from "./components/Recipe";
import Vegetarian from './components/Vegetarian';
import NonVegetarian from './components/Nonvegetarian';
import Desserts from './components/Desserts';
import Beverages from './components/Beverages';
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/recipes/:id" element={<RecipeDetails/>}/>
          <Route path="/recipes/vegetarian" element={<Vegetarian/>}/>
          <Route path="/recipes/nonvegetarian" element={<NonVegetarian/>}/>
          <Route path="/recipes/desserts" element={<Desserts/>}/>
          <Route path="/recipes/beverages" element={<Beverages/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
