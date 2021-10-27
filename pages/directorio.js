import Header from './components/header';
import SecondaryStaticNavbar from './components/secondNav';
import Footer from './components/footer';
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
      <Header title="Directorio"/>
      <SecondaryStaticNavbar/>

      <main>
        <div>
          <img src="/images/directoryCover.jpg" className="w-100"/>
        </div>
        <div className={styles.headerDirectory}>
          <h1>Directorio</h1>
          <p>Hemos creado un directorio increíble dónde encontrarás servicios con perspectiva de género.</p>
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
                          <a href={woman.facebook} target="_blank" rel="noopener noreferrer">
                            <img src="/images/icons/social/facebookIcon.svg" alt="facebook"/>
                          </a>
                          <br/>
                          </>
                        }
                        {woman.email &&
                          <>
                          <a href={woman.email} target="_blank" rel="noopener noreferrer">
                            <img src="/images/icons/social/emailIcon.svg" alt="email"/>
                          </a>
                          <br/>
                          </>
                        }
                        {woman.twitter &&
                          <>
                          <a href={woman.twitter} target="_blank" rel="noopener noreferrer">
                            <img src="/images/icons/social/twitterIcon.svg" alt="twitter"/>
                          </a>
                          <br/>
                          </>
                        }
                        {woman.instagram &&
                          <>
                          <a href={woman.instagram} target="_blank" rel="noopener noreferrer">
                            <img src="/images/icons/social/instagramIcon.svg" alt="instagram"/>
                          </a>
                          </>
                        }
                        {woman.website &&
                          <>
                          <a href={woman.website} target="_blank" rel="noopener noreferrer">
                            <img src="/images/icons/social/websiteIcon.svg" alt="webpage"/>
                          </a>
                          </>
                        }
                        {woman.phone &&
                          <>
                          <a href={`https://wa.me/${woman.phone}`} target="_blank" rel="noopener noreferrer">
                            <img src="/images/icons/social/phoneIcon.svg" alt="phone"/>
                          </a>
                          </>
                        }
                        {woman.linkedin &&
                          <>
                          <a href={woman.linkedin} target="_blank" rel="noopener noreferrer">
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