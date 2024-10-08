import Card from "../components/cards";
import Carrousel from "../components/carrousel";
import Head from "../components/header";
import { Fragment } from "react";
import "../styles/main.css";
import '../scripts/carrousel.js';

export default function Main(){
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