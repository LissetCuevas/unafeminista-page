import Header from './components/header';
import SecondaryStaticNavbar from './components/secondNav';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/Terminos.module.css';

import React from 'react'

export default function TermsAndConditions() {

  return (
    <div>
      <Header title="Terminos y condiciones"/>
      <SecondaryStaticNavbar/>

      <main style={{ padding: '0% 20% 3% 20%' }} className={styles.terminos}>
          <h5>Nuestros</h5>
          <h1>Términos y condiciones</h1>
          <div className={styles.text}>
            <p>
              Queda estrictamente prohibida la reproducción, distribución o publicación de los contenidos dentro del sitio sin haberlo comunicado previamente.
            </p>
            <p>
              Las publicaciones realizadas dentro del sitio así como las ilustraciones, logos e imágenes intervenidas son propiedad del grupo de colaboradoras y de las escritoras de los mismos, ayúdanos a seguir conservando un sitio seguro.
            </p>
          </div>
      </main>
      <Footer/>
    </div>
  )
}
