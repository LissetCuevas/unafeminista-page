import Head from 'next/head'
import Link from 'next/link'
import StaticNavbar from './components/navbar'
import Footer from './components/footer'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Section.module.css';

import React, { useState, useEffect } from 'react'

export default function Contacto(props) {
  
  const books = props.books;
  const getCurrentBook = (books) => {
    for (let book in books) {
      if (books[book].position == 1){
        return books[book];
      }
    }
  };
  const currentBook = getCurrentBook(books) ? getCurrentBook(books) : books.book1;

  return (
    <div>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/images/logo.jpg" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      </Head>

      <StaticNavbar/>
      <main className={styles.contact}>
          <Container>
              <Row>
                <Col xs={12} md={8} className={styles.mainPostCol}>
                  <div>
                    <h1>Contacto</h1>
                    <p>¿Te gustaría platicarnos algo? Estamos para escucharte, escribenos y te responderemos lo más pronto posible.</p>
                  </div>
                  <Form>
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
                <Col xs={12} md={4} className={`text-center ${styles.lecturaLinkCol}`}>
                  <a href="/circulo-de-lectura">
                    <p>Aquí encontraras nuestro circulo de lectura</p>
                    <img src={currentBook.image}></img>
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