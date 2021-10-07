import Header from './components/header';
import SecondaryStaticNavbar from './components/secondNav';
import Footer from './components/footer';
import { Container, Row, Carousel } from 'react-bootstrap';
import { getNext } from './podcast';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/Manifiesto.module.css';

import React, {useEffect, useState} from 'react';
import LeadCard from './manifiesto/leadCard';

export default function Manifiesto(props) {
  const [screenSz, setScreenSz] = useState(0);

  const leads = props.nosotras;
  const numLeads = leads.length;


  useEffect(() => {
    setScreenSz(window.screen.width);
    window.onresize = () => {
      setScreenSz(window.screen.width);
    }
  },[]);

  return (
    <div>
      <Header title="Manifiesto"/>
      <SecondaryStaticNavbar/>

      <main>
        <div className={`text-center ${styles.coverManifiesto} ${styles.content}`}>
          <p>Nos convertimos en un abrazo de luz en medio de las sombras del patriarcado.</p>
          <div>
            <img src="/images/marcha[3108].png"></img>
          </div>
        </div>
        <div className={styles.manifiesto}>
          <h1>Manifiesto</h1>
          <p>
            Una Feminista inicia el 19 de Agosto de 2013 como una propuesta web de difusión de contenido feminista, 
            el objetivo del proyecto es informar sobre el movimiento y abrir espacios de discusión al respecto.
          </p>
          <p>
            Buscamos ser un medio de difusión de noticias y voces feministas, el crear nuestro propio medio  
            digital es una forma de sumar resistencia al movimiento, dar eco a otras mujeres y romper las barreras 
            patriarcales  y machistas que nos han silenciado por años, va por las que fueron, las que nos arrebataron, 
            las que resistimos y las que vienen, no estamos solas, estamos todas.
          </p>
          <p>
            Que donde una voz misógina dijo que los lugares de creación feminista no son posibles puedan replicar las 
            voces de las mujeres rompiendo esas estructuras y llenando todo de sororidad.
          </p>
          <p>
            Este proyecto pretende fomentar la creación de espacios feministas para crecer colectivamente, que donde el 
            odio a las mujeres irrumpió, la luz feminista deslumbre con nuevas formas de revolución y acompañamiento.
          </p>
          <p>
            In girl power we trust, las morras hacemos revolución, somos las hijas rebeldes y contestonas que un día les 
            dijeron “Tu te callas” pero no nos callaron, nos hicieron replicar más fuerte.
          </p>
          <img src='images/logoRojo.png' style={{height: '7em', width:'7em'}}/>
          <p className={styles.bienvenidaP}>
            Bienvenida.
          </p>

        </div>
        <div className={styles.nosotras}>
          <h2 id="nosotras" className={styles.content}>Nosotras</h2>
          <Carousel 
            slide={false} 
            indicators={false}
            prevLabel={null} 
            nextLabel={null} 
            nextIcon={<img src="/images/icons/arrowLeft.svg" style={{height:'50px', width: 'auto'}}/>} 
            prevIcon={<img src="/images/icons/arrowRight.svg" style={{height:'50px', width: 'auto'}}/>}
          >
            {leads.map((lead, i) => (
                <Carousel.Item>
                  <div className={styles.carouselItems}>
                    <LeadCard {...leads[i]} key={leads[i].name}/>
                    { screenSz > 700 && 
                      <LeadCard {...leads[getNext(i,numLeads)]} key={leads[getNext(i,numLeads)].name}/> 
                    }
                    { screenSz > 1000 && 
                      <LeadCard {...leads[getNext(i+1,numLeads)]} key={leads[getNext(i+1,numLeads)].name}/> 
                    }
                    { screenSz > 1300 && 
                      <LeadCard {...leads[getNext(i+2,numLeads)]} key={leads[getNext(i+2,numLeads)].name}/>
                    }
                  </div>
                </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export const getStaticProps = async () => {

  const fs = require("fs");
  const matter = require("gray-matter");
  const path = require("path");

  const files = fs.readdirSync("nosotras");
  const nosotras = files.map(filename => {
      const rawContent = fs.readFileSync(path.join("nosotras",filename)).toString();
      const { data } = matter(rawContent);
      return data;
  });

  return {
    props: { nosotras }
  };
};
