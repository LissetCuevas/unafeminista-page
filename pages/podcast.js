import Head from 'next/head'
import StaticNavbar from './components/navbar'
import Footer from './components/footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/CirculoLectura.module.css';

import React from 'react'

export default function Podcast(props){
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