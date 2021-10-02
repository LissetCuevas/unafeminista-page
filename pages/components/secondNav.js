import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Nav.module.css';


const SecondaryStaticNavbar = () => {
  return (
    <div className={styles.navDiv}>
      <div className = {styles.brandNameSecondary}>
        <a href="/">
          <img src="/images/logo.jpg"
              className="rounded-circle"
              alt="Logo de Una feminista"
          />
        </a>
      </div>
      <Navbar expand="lg" className={styles.navSecondary}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><img src="/images/icons/toggle.svg"/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className={`mr-auto ${styles.nav_link}`}>
            <Nav.Link key="manifiesto" href="/manifiesto">Manifieseto</Nav.Link>
            <Nav.Link key="podcast" href="/podcast">Podcast</Nav.Link>
            <Nav.Link key="lectura" href="/circulo-de-lectura">Circulo de lectura</Nav.Link>
            <Nav.Link key="blog" href="/#blog">Blog</Nav.Link>
            <Nav.Link key="directorio" href="/directorio">Directorio</Nav.Link>
            <Nav.Link key="contacto" href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default SecondaryStaticNavbar;