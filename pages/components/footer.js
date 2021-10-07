import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Nav className={styles.disapearContent}>
        <Nav.Link href="/manifiesto#nosotras">Nosotras</Nav.Link>
        <Nav.Link href="/manifiesto">Manifiesto</Nav.Link>
        <Nav.Link href="/circulo-de-lectura">Círculo de lectura</Nav.Link>
        <Nav.Link href="/#blog">Blog</Nav.Link>
        <Nav.Link href="/contacto">Contacto</Nav.Link>
      </Nav>
      <hr className={styles.disapearContent}/>
      <Nav className={styles.smallFooter}>
          <div className={`${styles.termsFooter} ${styles.terms}`}>
            <p><a href="/terminos-y-condiciones">©2021 Una feminista - Términos y condiciones</a></p>
          </div>
          <div className={`d-flex justify-content-center justify-content-md-end ${styles.socialFooter}`}>
            <Nav.Link href="https://www.facebook.com/Unafeministamx">
              <img src="/images/icons/social/facebook.svg" alt="facebook"/>
            </Nav.Link>
            <Nav.Link href="https://www.twitter.com/unafeministamx">
              <img src="/images/icons/social/twitter.svg" alt="twitter"/>
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UCcvwkE9-lIIhrQ9DAPoG_kA">
              <img src="/images/icons/social/youtube.svg" alt="youtube"/>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/unafeminista/">
              <img src="/images/icons/social/instagram.svg" alt="instagram"/>
            </Nav.Link>
          </div>
      </Nav>
    </footer>
  );
}

export default Footer;