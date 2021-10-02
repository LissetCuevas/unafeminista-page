import Header from './components/header';
import SecondaryStaticNavbar from './components/secondNav';
import Footer from './components/footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/Contacto.module.css';

import React from 'react'

export default function Contacto(props) {
  
  const currentBook = props.books.currentBook;

  return (
    <div>
      <Header title="Contacto"/>
      <SecondaryStaticNavbar/>
      
      <main className={styles.contact}>
          <Container>
              <Row>
                <Col xs={12} md={8} className={styles.mainPostCol}>
                  <div>
                    <h1>Contacto</h1>
                    <p>¿Te gustaría platicarnos algo? Estamos para escucharte, escribenos y te responderemos lo más pronto posible.</p>
                  </div>
                  <Form action="mailto:unafeminista@hotmail.com" method="POST" enctype="multipart/form-data" name="Mensaje">
                    <Form.Group controlId="name">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control as="input" placeholder="Ingresa tu nombre"/>
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.Label>Correo electronico</Form.Label>
                      <Form.Control type="email" placeholder="Ingresa tu correo electronico" />
                    </Form.Group>
                    <Form.Group controlId="message">
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Tu mensaje va aquí"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Enviar
                    </Button>
                  </Form>
                </Col>
                <Col xs={12} md={4} className={`text-center ${styles.lecturaLinkCol} ${styles.smHide}`}>
                  <a href="/circulo-de-lectura">
                    <p>Aquí encontraras nuestro circulo de lectura</p>
                    <div className={styles.bgCircleWFlowers}>
                      <img src={currentBook.image}></img>
                    </div>
                  </a>    
                </Col>
              </Row>
            </Container>
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