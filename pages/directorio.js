import Head from 'next/head'
import StaticNavbar from './components/navbar'
import Footer from './components/footer'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/sections/Directorio.module.css';

import React from 'react'

export default function Directorio(props) {
  
  const directory = props.directory;
  
  return (
    <div>
      <Head>
        <title>Directorio</title>
        <link rel="icon" href="/images/logoRojo.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      </Head>

      <StaticNavbar/>
      <main>
        <div className={styles.headerDirectory}>
          <h1>Directorio</h1>
          <p>Hemos creado un directorio de mujeres para mujeres dónde encontrás servicios con perspectiva de genero.</p>
        </div>
        <div className={styles.directory}>
          <Container>
            <Row className="justify-content-center">
              {directory.map((woman,i) => {
                return(
                  <Col key={`woman_${i}`} xs={12} md={4} className={styles.directoryCard}>
                    <Row>
                      <Col xs={2} md={2} className={styles.socialCard}>
                        {woman.facebook &&
                          <>
                          <a href={woman.facebook}>
                            <img src="/images/icons/social/facebookIcon.svg" alt="facebook"/>
                          </a>
                          <br/>
                          </>
                        }
                        {woman.email &&
                          <>
                          <a href={woman.email}>
                            <img src="/images/icons/social/emailIcon.svg" alt="email"/>
                          </a>
                          <br/>
                          </>
                        }
                        {woman.twitter &&
                          <>
                          <a href={woman.twitter}>
                            <img src="/images/icons/social/twitterIcon.svg" alt="twitter"/>
                          </a>
                          <br/>
                          </>
                        }
                        {woman.instagram &&
                          <>
                          <a href={woman.instagram}>
                            <img src="/images/icons/social/instagramIcon.svg" alt="instagram"/>
                          </a>
                          </>
                        }
                        {woman.website &&
                          <>
                          <a href={woman.website}>
                            <img src="/images/icons/social/websiteIcon.svg" alt="webpage"/>
                          </a>
                          </>
                        }
                        {woman.phone &&
                          <>
                          <a href={`https://wa.me/${woman.phone}`}>
                            <img src="/images/icons/social/phoneIcon.svg" alt="phone"/>
                          </a>
                          </>
                        }
                        {woman.linkedin &&
                          <>
                          <a href={woman.linkedin}>
                            <img src="/images/icons/social/linkedinIcon.svg" alt="linkedin"/>
                          </a>
                          </>
                        }
                      </Col>
                      <Col xs={10} md={10}>
                        <img src={woman.image}></img>
                        <h5>{woman.name}</h5>
                        <hr/>
                        <h5>{woman.job}</h5>
                        <p>{woman.description}</p>
                      </Col>
                    </Row>
                  </Col>
                )
              })}
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
  const matter = require("gray-matter");
  const path = require("path");

  const files = fs.readdirSync("directory");
  const directory = files.map(filename => {
      const rawContent = fs.readFileSync(path.join("directory",filename)).toString();
      const { data } = matter(rawContent);
      return data;
  });

  return {
    props: { directory }
  };
};