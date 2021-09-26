import Head from 'next/head';
import StaticNavbar from './components/navbar';
import Footer from './components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/Podcast.module.css';

import React from 'react'

const ButtonWImage = (props) => {
  return (
    <div className={styles.buttonWImage}>
      <a href={props.href}><img src={props.src}/></a>
    </div>
  )
}

export default function Podcast(){
  return (
    <div>
      <Head>
        <title>Podcast</title>
        <link rel="icon" href="/images/logo.jpg" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      </Head>

      <StaticNavbar/>
      <main className={styles.podcast}>
          <Container>
            <Row className={styles.smCurrentBook}>
              <Col xs={12} md={12} lg={7}>
                <p>Bienvenida a nuestro podcast</p>
                <h1>Escuchanos aquí</h1>
                <div className={styles.buttonsContainer}>
                  <ButtonWImage href="https://www.spotify.com" src="images/spotify.svg"/>
                  <ButtonWImage href="https://www.spotify.com" src="images/Google-podcast.svg"/>
                  <ButtonWImage href="https://www.spotify.com" src="images/Apple-music.svg"/>
                  <ButtonWImage href="https://www.spotify.com" src="images/Anchor.svg"/>
                </div>
              </Col>
              <Col md={5} className={styles.illustration}>
                <img src="/images/Podcast-Illustration.svg"/>
              </Col>
            </Row>
          </Container>
      </main>
      <Footer/>
    </div>
  )
}
