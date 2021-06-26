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

    const copy = function(e) {
        let selection = document.getSelection();
        let source = '\nFuente '  + window.location.href
        e.clipboardData.setData('text/plain', selection + source);
        console.log()
        e.preventDefault();
    }

    return( 
        <div>
            <Head>
                <title>{data.title}</title>
                <meta title="description" content={data.description}/>
                <link rel="icon" href="/images/logo.jpg"/>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <StaticNavbar/>
            <main onCopy={copy}>
                <div className={`text-center d-line align-center ${styles.coverArticle}`} style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${data.image}) center/cover fixed no-repeat`}}>
                    <div className={styles.centerDiv}>
                        <p>{data.date}</p>
                        <h1>{data.title}</h1>
                        <hr/>
                        <p>{data.author} &emsp;- &emsp;{data.authorTwitter}</p>
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
                                <img src={data.authorPhoto}/>
                            </Col>
                            <Col xs={12} md={8} className={styles.authorDescrip}>
                                <p>
                                    <b>{data.author}</b>. {data.authorDescription}
                                </p>
                                <p>
                                    {data.authorTwitter}
                                <br></br>
                                    {data.authorMail}
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