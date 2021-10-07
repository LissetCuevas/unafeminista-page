import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Nav.module.css';


const StaticNavbar = () => {
  return (
    <div className={styles.navDiv}>
      <div className = {styles.brandName}>
        <a className="d-flex justify-content-md-center justify-content-sm-start align-items-center" href="/">
          <img src="/images/logoRojo.png"
              className="rounded-circle"
              alt="UnaFeminista logo"
          />
          <p>Una feminista</p>
        </a>
      </div>
      <Navbar expand="lg" className={styles.nav}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><img src="/images/icons/toggle.svg"/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className={`mr-auto ${styles.nav_link}`}>
            <Nav.Link key="manifiesto" href="/manifiesto">Manifiesto</Nav.Link>
            <Nav.Link key="podcast" href="/podcast">Podcast</Nav.Link>
            <Nav.Link key="lectura" href="/circulo-de-lectura">Círculo de lectura</Nav.Link>
            <Nav.Link key="blog" href="/#blog">Blog</Nav.Link>
            <Nav.Link key="directorio" href="/directorio">Directorio</Nav.Link>
            <Nav.Link key="contacto" href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default StaticNavbar;