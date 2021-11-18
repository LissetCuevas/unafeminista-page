import Header from './components/header';
import Link from 'next/link';
import Image from 'next/image';
import StaticNavbar from './components/navbar';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import NewsletterForm from './components/newsletterForm';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import React, { useState, useEffect } from 'react'
import NewsLetterModal from './components/newsLetterModal';

export default function Home(props) {
  
  const splitPosts = (currentSection) => {
    var results = [];
    var subArrays = [];
    let myArray = sortPosts([...currentSection]);
    while (myArray.length) {
      results = [];
      subArrays.push(myArray.splice(0, 3));
      results.push(subArrays);
    }
    return results;
  }  

  const sortPosts = (posts) => {
    return posts.sort((a,b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      if (a.main) return -1;
      if (b.main) return 1;
      return date2.getTime() - date1.getTime();
    })
  }

  const topics = ['Cultura','Salud','Notas Rebeldes','Recomendaciones'];
  const blog = props.blog;
  const [ currentSection, setCurrentSection ] = useState(splitPosts(blog));
  const mainPost = blog.find(post => post.main == true)
  const url = "https://linktr.us5.list-manage.com/subscribe/post?u=b1fe6a5e8ea37a86dc1c29f51&amp;id=50bff0a552";

  const showPostsbyTopic = (topic) => {
    setCurrentSection(splitPosts(topic == 'Todos' ? blog : blog.filter(post => post.tag.includes(topic))));
  }

  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])

  return (
    <div>
      <Header title="Una feminista"/>
      <StaticNavbar/>
     
       <NewsLetterModal />
      <main className={styles.main}>
        <div id="mainPost">
          <Container>
            <Row>
              <Col xs={12} md={6} className={styles.mainPostCol}>
                <h1>{mainPost.title}</h1>
                <p>{mainPost.description}</p>
                <Link href="/blog/{mainPost.slug}" as={"/blog/" + mainPost.slug} className={styles.readArticleButton}>
                  <a>Leer artículo</a>
                </Link>
              </Col>
              <Col xs={12} md={6} className={styles.mainPictureCol}>
                <span>
                <img className="img-fluid" src="/images/marcha2.png"></img>
                </span>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.blogSection}>
          <h1 id="blog">Nuestro Blog</h1>
          <div>
            <Navbar expand="lg" className={styles.navTopic}>
              <Navbar.Toggle aria-controls="basic-navbar-nav"><img src="/images/icons/filter.svg"/></Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav onSelect={(topic) => showPostsbyTopic(topic)}>
                  <p className={styles.navP}>Buscar por:</p>
                  <Nav.Item as="li">
                  <Nav.Link eventKey="Todos" className={styles.navTopicLink}>Todos</Nav.Link>
                  </Nav.Item>
                  {topics.map(topic => {
                    return (
                      <Nav.Item key={topic} as="li">
                      <Nav.Link eventKey={topic} className={styles.navTopicLink}>{topic}</Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className={styles.postsMargin}>
            <img className={styles.backQuotes} src="/images/icons/pinkQuote.svg"></img>
            <Container className={styles.myContainer}>
              {currentSection.map((subblock,j) => {
                return(
                  <div key={`block_${j}`}>
                  {subblock.map((row,index) => {
                    return(
                      <Row key={`row_${index}`}>
                        {row.map((post,i) => {
                          return(
                          <Col xs={12} md={4} className={styles.smPost}
                               key={`post_${i}`}>
                            <a href={"/blog/" + post.slug} className={styles.post}>
                              <img src={post.image}></img>
                              <h5>
                                {post.title}
                              </h5>
                              <p>
                                {post.author}
                              </p>
                            </a>
                          </Col>
                          )
                        })}
                      </Row>
                    )
                  })}
                  </div>
                )
              })}
            </Container>
          </div>
        </div>
      </main>
      <div className={styles.modalContainter} style={{backgroundColor: 'rgb(240 187 199 / 31%)', padding: 15}}>
        <MailchimpSubscribe 
            url={url}
            render={({ subscribe, status, message}) => (
                <NewsletterForm
                    status={ status }
                    message={ message }
                    onValidated={ formData => subscribe( formData ) }
                />
            )}
        />
        {/* <div className={styles.hide}>
            <img src="/images/imageNewsLetter.png" className={styles.modalImage}/>
        </div> */}
      </div> 
      <Footer/>
    </div>
  )
}

export const getStaticProps = async () => {

  const fs = require("fs");
  const matter = require("gray-matter");
  const path = require("path");
  
  const files = fs.readdirSync("blog");
  const blog = files.map(filename => {
      const slug = filename.replace(".md","");
      const rawContent = fs
        .readFileSync(path.join("blog",slug + ".md"))
        .toString();
      const { data } = matter(rawContent);
      return { ...data , slug };
    });

  return {
    props: { blog }
  };
};
