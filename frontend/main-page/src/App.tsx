import Card from "./components/cards";
import Carrousel from "./components/carrousel";
import { Fragment } from "react";
import './styles/cards.css';
import './styles/carrousel.css';
import './App.css';
import './scripts/carrousel.js'

function App(){
    return (
      <Fragment>
        <section className="slider-container">
          <Carrousel/>
        </section>
        <section className="cards-container">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </section>
        <section className="">
        </section>
      </Fragment>
    )
}

export default App;
