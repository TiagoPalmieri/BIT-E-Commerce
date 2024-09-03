import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "../components/cards.js";
import Carrousel from "../components/carrousel.js";
import Head from "../components/header.js";
import Welcome from "../components/welcome.js";
import Login from "./login.js";
import { Fragment } from "react";
import "../styles/cards.css";
import "../styles/carrousel.css";
import "../App.css";
import "../styles/header.css";
import "../styles/welcome.css";
import "./styles/login.css";

function App(){
  return (
    <Fragment>
      <Welcome />
      <Head />
      <section className="slider-container">
        <Carrousel />
      </section>
      <section className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <Router>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
