import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./comps/home";
import './App.css';
import VodInput from "./comps/vodInput";
import Footer from "./comps/footer";
import MovieInfo from "./comps/movieInfo";
function App() {
  return (
    <BrowserRouter>
      <VodInput/>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/info/:id" element={<MovieInfo/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
