import React from "react";
import fs from "fs";
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import marked from "marked"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StaticNavbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../../styles/Post.module.css';

const Post = ({stats, htmlString, data}) => {
    return( 
        <div>
            <Head>
                <title>{data.title}</title>
                <meta title="description" content={data.description}/>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <StaticNavbar/>
            <main>
                <div className={`text-center d-line align-center ${styles.coverArticle}`} style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${data.image}) center/cover fixed no-repeat`}}>
                    <div className={styles.centerDiv}>
                        <p>14/01/2020</p>
                        <h1>{data.title}</h1>
                        <hr/>
                        <p>{data.author} &emsp;- &emsp;@cuenta_twitter</p>
                        <p>Foto: Catillo Lujo</p>
                        <p>
                            <img src="/images/icons/time.svg"/>&nbsp;{Math.ceil(stats.minutes)} min 
                            &ensp;&ensp;
                            <a href={data.audio ? data.audio : '#'}>
                                <img src="/images/icons/audio.svg" alt="Escuchar artículo"/>
                            </a>
                        </p>
                    </div>
                </div>
                <article className={styles.articleContent}>
                    <div dangerouslySetInnerHTML={{ __html: htmlString}}></div>
                </article>
                <div className={styles.articleAuthor}>
                    <hr/>
                    <Container>
                        <Row>
                            <Col xs={12} md={4} className="text-center">
                                <img src="/images/leads/AndreaGarcia.png"/>
                            </Col>
                            <Col xs={12} md={8} className={styles.authorDescrip}>
                                <p>
                                    Margarita Mantilla (Ciudad de México, 1985) Socióloga e investigadora feminista, Maestra en estudios de la mujer por la UAM-X. Cofundadora de CoCu (Colectiva Cuerpa), Feministas de la UAM-X, Me gusta menstruar y creadora de Tallercitas feministas (espacio para la formación política feminista). Especialista en teoría feminista, desde donde trata los temas de maternidad, economía feminista, acoso callejero, vientres de alquiler, relaciones de género, gordAfobia y más. Apasionada por la música, el cine y la literatura, especialmente donde las realizadoras son mujeres.
                                </p>
                                <p>
                                    @cuentatwitter  @instagram @facebook
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
            <Footer/>
        </div>
    )
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync("blog");
    const paths = files.map(filename => ({
        params:{
            slug: filename.replace(".md","")
        }
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params: {slug} }) => {
    const markdownWithMetadata = fs
        .readFileSync(path.join("blog",slug + ".md"))
        .toString();
    const parsedMarkdown = matter(markdownWithMetadata);
    const htmlString = marked(parsedMarkdown.content);
    const readingTime = require('reading-time');
    const stats = readingTime(htmlString);
    
    return {
        props: {
            stats,
            htmlString,
            data: parsedMarkdown.data
        }
    };
};

export default Post;