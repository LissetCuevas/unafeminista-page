import Head from 'next/head'
import Link from 'next/link'
import StaticNavbar from './components/navbar'
import Footer from './components/footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/Manifiesto.module.css';

import React, { useState } from 'react'

export default function Manifiesto() {

  const [showNat, setShowNat] = useState(false);
  const [showCrys, setShowCrys] = useState(false);
  const [showPao, setShowPao] = useState(false);
  const [showAndy, setShowAndy] = useState(false);

  const handleCloseNat = () => {
    event.preventDefault()
    setShowNat(false)
  };
  const handleShowNat = (event) => {
    event.preventDefault()
    setShowNat(true)
  };

  const handleCloseCrys = () => {
    event.preventDefault()
    setShowCrys(false)
  };
  const handleShowCrys = (event) =>{
    event.preventDefault()
    setShowCrys(true)
  };

  const handleClosePao = () => {
    event.preventDefault()
    setShowPao(false)
  }
  const handleShowPao = (event) => {
    event.preventDefault()
    setShowPao(true)
  };

  const handleCloseAndy = () => {
    event.preventDefault()
    setShowAndy(false)
  };
  const handleShowAndy = (event) => {
    event.preventDefault()
    setShowAndy(true)
  };

  const leads = [
    {name: "Nathaly Monserrat",
     position: "Directora editorial",
     photo: "/images/leads/NathalyMonserrat.png",
     description: "Soy la mano con glitter detrás de @unafeminista, socióloga en formación, me gusta guardar los momentos de mi vida en disparos fotográficos, creo en las hojas de té, mi vida se puede explicar en una canción de Taylor Swift.",
     movie: "Whip it",
     woman: "Ana Chávez y Taylor Swift",
     book: '"Persépolis" Marjane Satrapi',
     quote:'"Una mujer sin un hombre es como un pez sin bicicleta" Gloria Steinem',
     show : showNat,
     handleShow: handleShowNat,
     handleClose: handleCloseNat
    },
    {name: "Crystal Sánchez",
     position: "Jefa Audiovisual",
     photo: "/images/leads/CrystalSanchez.png",
     description: "Soy Crystal Sánchez, estudiante de Comunicación Social. Sagitario. Mi vida pasa entre ver mis series favoritas, tomar fotos chidas de mi carita y de personitas que amo, y escuchar la música de la diosa Dua Lipa.",
     movie: "A Walk To Remember",
     woman: "Mi mamá y Dua Lipa",
     book: "A Walk To Remember- Nicholas Sparks",
     quote:'"Lo único que quiero es convertirme en una mujer poderosa" - Blair Waldorf',
     show : showCrys,
     handleShow: handleShowCrys,
     handleClose: handleCloseCrys
    },
    {name: "Paola Granados",
     position: "Jefa de arte creativo",
     photo: "/images/leads/PaolaGranados.png",
     description: "Estudiante de Comunicación Social. Feminista. Me apasiona la fotografía, la ilustración, los días de películas y los perritos.",
     movie: "Incendies y Mulan",
     woman: "Mi mamá",
     book: 'Flores en el ático - Virginia C. Andrews',
     quote:'"No hay barrera, cerradura, ni cerrojo que puedas imponer a la libertad de mi mente" - Virginia Woolf',
     show : showPao,
     handleShow: handleShowPao,
     handleClose: handleClosePao
    },
    {name: "Andrea García",
     position: "Jefa de redacción",
     photo: "/images/leads/AndreaGarcia.png",
     description: "Estudiante de Comunicación Social. Feminista. Amante de la poesía, fotografía e ilustración. Mujer en constante transformación, sembrando amor propio y floreciendo entre la lluvia. Escritora de su propio camino.",
     movie: "La Saga de Harry Potter",
     woman: "Mi mamá y Emma Watson",
     book: "Orgullo y Prejuicio - Jane Austen",
     quote:'"Soy agua, lo bastante suave como para ofrecer vida. Lo bastante dura como para ahogarla" -Rupi Kaur',
     show : showAndy,
     handleShow: handleShowAndy,
     handleClose: handleCloseAndy
    }
  ]

  return (
    <div>
      <Head>
        <title>Manifiesto</title>
        <link rel="icon" href="/images/logo.jpg" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      </Head>

      <StaticNavbar/>
      <main>
        <div className={`text-center ${styles.coverManifiesto} ${styles.content}`}>
          <p>Nos convertimos en un abrazo de luz en medio de las sombras del patriarcado.</p>
          <div>
            <img src="/images/marcha[3108].png"></img>
          </div>
        </div>
        <div className={styles.manifiesto}>
          <h1>Manifiesto</h1>
          <p>
            Una Feminista inicia el 19 de Agosto de 2013 como una propuesta web de difusión de contenido feminista, 
            el objetivo del proyecto es informar sobre el movimiento y abrir espacios de discusión al respecto.
          </p>
          <p>
            Buscamos ser un medio de difusión de noticias y voces feministas, el crear nuestro propio medio  
            digital es una forma de sumar resistencia al movimiento, dar eco a otras mujeres y romper las barreras 
            patriarcales  y machistas que nos han silenciado por años, va por las que fueron, las que nos arrebataron, 
            las que resistimos y las que vienen, no estamos solas, estamos todas.
          </p>
          <p>
            Que donde una voz misógina dijo que los lugares de creación feminista no son posibles puedan replicar las 
            voces de las mujeres rompiendo esas estructuras y llenando todo de sororidad.
          </p>
          <p>
            Este proyecto pretende fomentar la creación de espacios feministas para crecer colectivamente, que donde el 
            odio a las mujeres irrumpió, la luz feminista deslumbre con nuevas formas de revolución y acompañamiento.
          </p>
          <p>
            In girl power we trust, las morras hacemos revolución, somos las hijas rebeldes y contestonas que un día les 
            dijeron “Tu te callas” pero no nos callaron, nos hicieron replicar más fuerte.
          </p>
          <p className={styles.bienvenidaP}>
            Bienvenida.
          </p>
        </div>
        <div className={styles.nosotras}>
          <h2 id="nosotras" className={styles.content}>Nosotras</h2>
          <Container>
            <Row>
              {leads.map((lead,i) => {
                return(
                  <Col key={lead.name} xs={12} md={3} className="text-center">
                    <a href="#" onClick={lead.handleShow}>
                    <img src={lead.photo}/>
                    <h3>{lead.name}</h3>
                    <p>{lead.position}</p>
                    <div className={styles.conoceme}>
                      <p>Conóceme</p>
                      <img src="images/icons/arrow.svg"></img>
                    </div>
                    </a>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      </main>
    
      {leads.map((lead,i) => {
        return(
          <Modal key={`modal_${lead.name}`} show={lead.show} onHide={lead.handleClose} animation={false} centered size="lg">
            <Modal.Body>
              <Container>
                <Row className={styles.closeModal}>
                  <a href="#" onClick={lead.handleClose}><img src="/images/icons/close.svg"/></a>
                </Row>
                <Row className={styles.modalPad}>
                  <Col xs={12} md={6} className={styles.leadInfoModal}>
                    <h4>{lead.name}</h4>
                    <h6>{lead.position}</h6>
                    <p>{lead.description}</p>
                    <div className={styles.socialModal}>
                      <a href="https://www.facebook.com/Unafeministamx"><img src="/images/icons/social/facebookIcon.svg" alt="facebook"/></a>
                      <a href="https://www.facebook.com/Unafeministamx"><img src="/images/icons/social/instagramIcon.svg" alt="instagram"/></a>
                      <a href="https://www.facebook.com/Unafeministamx"><img src="/images/icons/social/emailIcon.svg" alt="mail"/></a>
                      <a href="https://www.facebook.com/Unafeministamx"><img src="/images/icons/social/twitterIcon.svg" alt="twitter"/></a>
                      <a href="https://www.facebook.com/Unafeministamx"><img src="/images/icons/social/linkedinIcon.svg" alt="linkedin"/></a>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <p className={styles.leadfavInfoModal}>
                      <img src="/images/icons/book.svg"/>{lead.book}
                    </p>
                    <p className={styles.leadfavInfoModal}>
                      <img src="/images/icons/hand.svg"/>{lead.woman}
                    </p>
                    <p className={styles.leadfavInfoModal}>
                      <img src="/images/icons/movie.svg"/>{lead.movie}
                    </p>
                    <div className={`d-flex flex-row ${styles.leadfavQuote}`}>
                      <p className="align-self-end">{lead.quote}</p>
                      <img src="/images/icons/quote.svg"/>
                    </div>
                    
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        )
      })}

      <Footer/>
    </div>
  )
}