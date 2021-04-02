import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Nav.module.css';


const StaticNavbar = () => {
  return (
    <div className="">
      <div className = {styles.brandName}>
        <a className="d-flex justify-content-md-center justify-content-sm-start align-items-center" href="/">
          <img src="/images/logoRojo.png"
              className="rounded-circle"
              alt="UnaFeminista logo"
          />
          <p>Una feminista</p>
        </a>
      </div>
    <Navbar expand="lg" className={`${styles.nav}`}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className={`mr-auto ${styles.nav_link}`}>
          <Nav.Link href="/manifiesto">Manifieseto</Nav.Link>
          <Nav.Link href="/circulo-de-lectura">Circulo de lectura</Nav.Link>
          <Nav.Link href="/#blog">Blog</Nav.Link>
          <Nav.Link href="/directorio">Directorio</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default StaticNavbar;