import Header from './components/header';
import SecondaryStaticNavbar from './components/secondNav';
import Footer from './components/footer';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/Podcast.module.css';

import React from 'react'

const ButtonWImage = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <div className={styles.buttonWImage}>
        <img src={props.src}/>
      </div>
    </a>
  )
}

export default function Podcast(props){

  console.log(props)
  return (
    <div>
      <Header title="Podcast"/>
      <SecondaryStaticNavbar/>

      <div>
        <img src="/images/podcastCover.JPG" className="w-100"/>
      </div>
      <main className={styles.podcast}>
        <Container>
          <Row className={styles.smCurrentBook}>
            <Col xs={12} md={5}>
              <h5>Bienvenida a nuestro podcast</h5>
              <h1>Escuchanos aquí</h1>
              <p>
                Hola, te damos la bienvenida a nuestro podcast, ponte comoda/o/e, de la mano de algunas expertas platicamos de temas que podrían interesarte.
              </p>
            </Col>
            <Col xs={12} md={7}>
              <div className={styles.buttonsContainer}>
                <ButtonWImage href="https://open.spotify.com/show/4ezjQgN50lboCzXrNwPtiD" src="images/spotify.svg"/>
                <ButtonWImage href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82MTQwYzJiNC9wb2RjYXN0L3Jzcw==" src="images/Google-podcast.svg"/>
                <ButtonWImage href="https://podcasts.apple.com/mx/podcast/una-feminista/id1574089955" src="images/Apple-music.svg"/>
                <ButtonWImage href="https://anchor.fm/una-feminista8" src="images/Anchor.svg"/>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={styles.episodios}>
          <h3>Episodios de nuestra primera temporada</h3>
          <Carousel>
            {props.podcast.map(episode => (
                <Carousel.Item>
                  <a href={episode.link} target="_blank" rel="noopener noreferrer">
                    <img
                      className={styles.episode}
                      src={episode.image}
                      alt={episode.id}
                    />
                  </a>
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

  const files = fs.readdirSync("podcast");
  const podcast = files.map(filename => {
      const rawContent = fs.readFileSync(path.join("podcast",filename)).toString();
      const { data } = matter(rawContent);
      return data;
  });

  return {
    props: { podcast }
  };
};
