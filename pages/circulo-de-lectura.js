import Head from 'next/head'
import StaticNavbar from './components/navbar'
import Footer from './components/footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Section.module.css';

import React, { useState, useEffect } from 'react'

export default function CirculoDeLectura(props){
  const currentBook = props.books.currentBook;
  const futureBooks = [props.books.book1,props.books.book2,props.books.book3,props.books.book4];

  return (
    <div>
      <Head>
        <title>Circulo de lectura</title>
        <link rel="icon" href="/images/logo.jpg" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      </Head>

      <StaticNavbar/>
      <main>
        <div className={styles.currentBook}>
          <Container>
            <Row>
              <Col xs={12} md={7} className={styles.smHide}>
                <h1>{currentBook.title}</h1>
                <h2>{currentBook.author}</h2>
                <p>{currentBook.description}</p>
                <a href="https://forms.gle/GwTu8se6xxNGTgw99">Lee con nosotras</a>
              </Col>
              <Col xs={12} md={5} className="text-center">
                <img className={styles.backFloresCirculo} src="/images/flores.svg"></img>
                <span>
                <img src={currentBook.image}></img>  
                </span>
                <h4>Este mes</h4>  
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.manifestoLectoras}>
          <Container>
              <Row>
                <Col xs={12} md={5} className={styles.bigColLectoras}>
                  <h2>Manifiesto de las lectoras rebeldes</h2>
                  <img src="/images/lectoras.png"></img>
                </Col>
                <Col xs={12} md={7} className={styles.manifLectorasCol}>
                  <Row className={`${styles.pinkRow} ${styles.manifLectorasRow}`}>
                    <Col xs={12} md={4} className="text-center">
                      <img src="/images/icons/lectoras1.png"></img>
                    </Col>
                    <Col xs={12} md={8}>
                      <h5>EL COMIENZO</h5>
                      <p>
                        El 21 de agosto de 2020 se dio una señal de rescate, se convocó a mujeres rebeldes que les gustara leer o quisieran encontrarse 
                        entre puntos y comas con otras mujeres. ¿Qué se puede esperar de un manifiesto de lectura? Una invitación atrevida… ESCUCHAR OTRAS 
                        REALIDADES Y SANAR EN CONJUNTO.
                      </p>
                    </Col>
                  </Row>
                  <Row className={styles.manifLectorasRow}>
                    <Col xs={12} md={4} className="text-center">
                      <img src="/images/icons/lectoras2.png"></img>
                    </Col>
                    <Col xs={12} md={8}>
                      <h5>¿QUE HACEMOS?</h5>
                      <p>
                        La lectura significó para nosotras más que un libro en turno, el circulo de lectoras rebeldes desafía una y otra vez a las leyes 
                        impuestas, nos demuestra que nuestros corazones están conectados reunión con reunión, hoy sentimos todo menos miedo.
                      </p>
                    </Col>
                  </Row>
                  <Row className={styles.manifLectorasRow}>
                    <Col xs={12} md={4} className="text-center">
                      <img src="/images/icons/lectoras3.png"></img>
                    </Col>
                    <Col xs={12} md={8}>
                      <h5>¿QUIÉNES SOMOS?</h5>
                      <p>
                        Un espacio de reflexión y amor entre mujeres donde cuestionamos nuestra realidad, somos disidentes, encontramos nuevos puntos de 
                        vista, pero también recibimos y damos amor, aprendemos continuamente, nos hacemos felices, nos asomamos a ventanas que nos dan múltiples 
                        universos, somos empáticas, aprendimos a tener opciones diversas desde el amor, nos acompañamos a nuestro proceso feminista.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
        </div>
        <div className={`text-center ${styles.futureBooks}`}>
          <h3>Próximos libros</h3>
          <Container>
            <Row>
              {futureBooks.map((book,i) => {
                return(
                  <Col key={`book_${i}`} xs={12} md={3} className={styles.books}>
                    <img src={book} alt=""></img>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export const getStaticProps = async () => {

  const fs = require("fs");
  const yaml = require('js-yaml');

  const rawContent = fs.readFileSync('site/content/books.yml', 'utf8');
  const books = yaml.load(rawContent);
      
  return {
    props: { books }
  };
};