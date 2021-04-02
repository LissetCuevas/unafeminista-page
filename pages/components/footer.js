import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Nav className={styles.disapearContent}>
        <Nav.Link href="/nosotras">Nosotras</Nav.Link>
        <Nav.Link href="/manifesto">Manifeseto</Nav.Link>
        <Nav.Link href="/circulo-de-estudio">Circulo de lectura</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/contacto">Contacto</Nav.Link>
      </Nav>
      <hr/>
      <Nav className={styles.smallFooter}>
          <div className={`${styles.termsFooter} ${styles.disapearContent}`}>
            <p>©2021 Una feminista - <a href="#">Terminos y condiciones</a></p>
          </div>
          <div className={`d-flex justify-content-end ${styles.socialFooter}`}>
            <Nav.Link href="/nosotras"><img src="/images/icons/social/facebook.svg" alt="facebook"/></Nav.Link>
            <Nav.Link href="/manifesto"><img src="/images/icons/social/twitter.svg" alt="twitter"/></Nav.Link>
            <Nav.Link href="/circulo-de-estudio"><img src="/images/icons/social/youtube.svg" alt="youtube"/></Nav.Link>
            <Nav.Link href="/blog"><img src="/images/icons/social/instagram.svg" alt="instagram"/></Nav.Link>
          </div>
      </Nav>
    </footer>
  );
}

export default Footer;