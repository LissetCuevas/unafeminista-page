import Header from './components/header';
import SecondaryStaticNavbar from './components/secondNav';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/CirculoLectura.module.css';

import React from 'react'


export default function CirculoDeLectura(props){
  const currentBook = props.books.currentBook;
  const futureBooks = [props.books.book1,props.books.book2,props.books.book3,props.books.book4];

  return (
    <div>
      <Header title="Circulo de lectura"/>
      <SecondaryStaticNavbar/>

      <main style={{marginTop: '2.5%'}}>
        <div className={styles.currentBook}>
          <Container>
            <Row className={styles.smCurrentBook}>
              <Col xs={12} md={7}>
                <div className={styles.smHide}>
                  <h1>{currentBook.title}</h1>
                  <h2>{currentBook.author}</h2>
                  <p>{currentBook.description}</p>
                </div>
                <a href="https://forms.gle/GwTu8se6xxNGTgw99" target="_blank" rel="noopener noreferrer">Lee con nosotras</a>
              </Col>
              <Col xs={12} md={5} className={`text-center ${styles.bgCircleWFlowers}`}>
                <img src={currentBook.image}  />
                <h4>{props.books.currentBookMessage}</h4>  
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
                  <Row className={styles.manifLectorasRow}>
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
                  <Row className={`${styles.pinkRow} ${styles.manifLectorasRow}`}>
                    <Col xs={12} md={4} className="text-center">
                      <img src="/images/icons/lectoras2.png"></img>
                    </Col>
                    <Col xs={12} md={8}>
                      <h5>¿QUÉ HACEMOS?</h5>
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
                        universos, somos empáticas, aprendimos a tener opciones diversas desde el amor, nos acompañamos en nuestra militancia feminista.
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