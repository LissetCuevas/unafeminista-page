import Head from 'next/head';
import StaticNavbar from './components/navbar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/Terminos.module.css';

import React from 'react'

export default function TermsAndConditions() {

  return (
    <div>
      <Head>
        <title>Terminos y Condiciones</title>
        <link rel="icon" href="/images/logo.jpg" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      </Head>

      <StaticNavbar/>
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
