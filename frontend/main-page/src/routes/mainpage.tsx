import Card from "../components/cards";
import Carrousel from "../components/carrousel";
import Head from "../components/header";
import Welcome from "../components/welcome";
import { Fragment } from "react";
import "../styles/cards.css";
import "../styles/carrousel.css";
import "../styles/main.css";
import "../styles/header.css";
import "../styles/welcome.css";

import '../scripts/carrousel.js';

export default function Main(){
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
    </Fragment>
  );
}