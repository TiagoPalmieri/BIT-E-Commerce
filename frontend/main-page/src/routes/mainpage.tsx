import Card from "../components/cards";
import Carrousel from "../components/carrousel";
import Head from "../components/header";
import Snackbar from "../components/snackbar.js";
import { Fragment } from "react";
import "../styles/cards.css";
import "../styles/carrousel.css";
import "../styles/main.css";
import "../styles/header.css";
import "../styles/snackbar.css";
import '../scripts/carrousel.js';

export default function Main(){


  setInterval(()=>{
    return(
      <Snackbar></Snackbar>
    );
  },5000);

  return (
    <Fragment>
      <Head />
      <section className="slider-container">
        <Carrousel />
      </section>
      <section className="cards-container">
        <Card product_image="" product_name="Hello this is a test" product_price={999}/>
      </section>
    </Fragment>
  );
}