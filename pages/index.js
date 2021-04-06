import Head from 'next/head'
import Link from 'next/link'
import StaticNavbar from './components/navbar'
import Footer from './components/footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';

import React, { useState, useEffect } from 'react'

export default function Home(props) {
  
  const splitPosts = (currentSection) => {
    var results = [];
    var subArrays = [];
    let myArray = [...currentSection];
    while (myArray.length) {
      results = [];
      subArrays.push(myArray.splice(0, 2));
      subArrays.push(myArray.splice(0, 3));
      results.push(subArrays);
    }
    return results;
  }  

  const topics = ['Cultura','Salud','Notas Rebeldes','Recomendaciones'];
  const blog = props.blog;
  const [ currentSection, setCurrentSection ] = useState(splitPosts(blog));
  const [ postsLength, setPostsLength ] = useState(0);
  const mainPost = blog.find(post => post.main == true)

  const showAllPosts = () =>{
    setCurrentSection(splitPosts(blog));
  }

  const showPostsbyTopic = (topic) => {
    setCurrentSection(splitPosts(topic == 'Todos' ? blog : blog.filter(post => topic === post.tag)));
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
      <Head>
        <title>Una Feminista</title>
        <link rel="icon" href="/images/logo.jpg" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      </Head>

      <StaticNavbar/>
     
      <main>
        <div id="mainPost">
          <Container>
            <Row>
              <Col xs={12} md={6} className={styles.mainPostCol}>
                <h1>{mainPost.title}</h1>
                <p>{mainPost.description}</p>
                <Link href="/blog/{mainPost.slug}" as={"/blog/" + mainPost.slug}>
                  <a>Leer artículo</a>
                </Link>
              </Col>
              <Col xs={12} md={6} className={styles.mainPictureCol}>
                <span>
                <img src="/images/marcha.png"></img>
                </span>
              </Col>
            </Row>
          </Container>
        </div>

        <div id="blog" className={styles.blogSection}>
          <h1>Nuestro Blog</h1>
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
                      <Nav.Item as="li">
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
              {currentSection.map(subblock => {
                return(
                  <>
                  {subblock.map((row,index) => {
                    return(
                      <Row>
                        {row.map((post,i) => {
                          return(
                          <Col xs={12} md={index%2 != 0 ? 4 : i == 0 ? 7 : 5} 
                               className={index%2 != 0 ? styles.smPost : i == 0 ? styles.lgPost  : styles.mdPost }
                               key={post.slug}>
                            <a href={"/blog/" + post.slug} className={styles.post}>
                              <img src={post.image} className={`img-responsive ${styles.fitImage}`}></img>
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
                  </>
                )
              })}
            </Container>
          </div>
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