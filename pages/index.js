import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home({ slugs }) {
 
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
    <div className={styles.container}>
      <Head>
        <title>Una Feminista</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main className={styles.main}>
        <div>
          {slugs.map(slug => {
            return (
              <div key={slug} className={styles.grid}>
                <Link href="/post/{slug}" as={"/post/" + slug}>
                  <a>{slug}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {

  const files = fs.readdirSync("posts");

  return {
    props: {
        slugs: files.map(filename => filename.replace(".md",""))
    }
  };
};