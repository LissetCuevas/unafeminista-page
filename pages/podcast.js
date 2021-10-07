import Header from './components/header';
import SecondaryStaticNavbar from './components/secondNav';
import Footer from './components/footer';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/Podcast.module.css';

import React, {useEffect, useState} from 'react'

const ButtonWImage = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <div className={styles.buttonWImage}>
        <img src={props.src}/>
      </div>
    </a>
  )
}

const EpisodeItem = ({episode}) => {
  return (
    <a href={episode.link} target="_blank" rel="noopener noreferrer" className={styles.episodeItem}>
      <img
        className={styles.episode}
        src={episode.image}
        alt={episode.id}
      />
    </a>
  );
};

const getNext = (actual,length) => {
  const next = actual + 1;
  if(next < length){
    return next;
  }
  return next - length;
}

export default function Podcast(props){
  const [navBG, setNavBG] = useState(true);
  const [screenSz, setScreenSz] = useState(window.screen.width);
  const numPodcast = props.podcast.length;

  useEffect(() => {
    window.onscroll = () => {
      if(window.scrollY > 10){
        setNavBG(false);
      }else{
        setNavBG(true);
      }
    }
    window.onresize = () => {
      setScreenSz(window.screen.width);
    }
  },[]);


  return (
    <div className={styles.bodyPodcast}>
      <Header title="Podcast"/>
      <SecondaryStaticNavbar transparent={navBG}/>
      <div className={styles.imgpodcast}></div>
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
          <br/>
          <Carousel slide={false}>
            {props.podcast.map((episode, i) => (
                <Carousel.Item>
                  <EpisodeItem episode={props.podcast[i]}/>
                  { screenSz > 700 && <EpisodeItem episode={props.podcast[getNext(i,numPodcast)]}/> }
                  { screenSz > 1000 && <EpisodeItem episode={props.podcast[getNext(i+1,numPodcast)]}/> }
                  { screenSz > 1300 && <EpisodeItem episode={props.podcast[getNext(i+2,numPodcast)]}/> }
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
