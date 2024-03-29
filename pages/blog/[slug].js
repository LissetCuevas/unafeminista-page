import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SecondaryStaticNavbar from '../components/secondNav';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../../styles/Post.module.css';

const AuthorSocialMedia = ({data,white}) => (
    <a href={data.authorSocialMedia === 'email' ? `mailto:${data.authorSocialMediaLink}` : data.authorSocialMediaLink} className={styles.authorSocialMedia}>
        <img src={`/images/icons/social/${data.authorSocialMedia}.svg`} className={white ? styles.iconWhite : ''} alt="email"/>
        {data.authorSocialMediaTag}
    </a>
);

const Post = ({stats, htmlString, data}) => {

    const copy = function(e) {
        let selection = document.getSelection();
        let source = '\nFuente '  + window.location.href;
        e.clipboardData.setData('text/plain', selection + source);
        e.preventDefault();
    }

    return( 
        <div>
            {/* <Head>
                <title>{data.title}</title>
                <meta title="description" content={data.description}/>
                <link rel="icon" href="/images/logo.jpg"/>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head> */}
            <Header title={data.title}/>
            <SecondaryStaticNavbar/>

            <main onCopy={copy}>
                <div className={`text-center d-line align-center ${styles.coverArticle}`} style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${data.image}) center/cover fixed no-repeat`}}>
                    <div className={styles.centerDiv}>
                        <p>{data.date}</p>
                        <h1>{data.title}</h1>
                        <hr/>
                        <p className={styles.authorData}>
                            <div>{data.author} <span className={styles.hide}>&emsp;- &emsp;</span></div>
                            <div className='text-center'>
                                <AuthorSocialMedia data={data} white={true}/>
                            </div>
                        </p>
                        <p>
                            <img src="/images/icons/time.svg"/>&nbsp;{Math.ceil(stats.minutes)} min 
                            &ensp;&ensp;
                            {data.audio && <a href={data.audio}>
                                <img src="/images/icons/audio.svg" alt="Escuchar artículo"/>
                            </a>}
                        </p>
                    </div>
                </div>
                <article className={styles.articleContent}>
                    <div dangerouslySetInnerHTML={{ __html: htmlString}} />
                    <img src='/images/logoRojo.png' style={{height: '8em', width:'8em'}}/>
                </article>
                <div className={styles.articleAuthor}>
                    <hr/>
                    <Container>
                        <Row>
                            <Col xs={12} md={4} className="text-center">
                                <img src={data.authorPhoto} className={styles.articleAuthorPhoto}/>
                            </Col>
                            <Col xs={12} md={8} className={styles.authorDescrip}>
                                <p>
                                    <b>{data.author}</b>. {data.authorDescription}
                                </p>
                                <p>
                                    <AuthorSocialMedia data={data}/>
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