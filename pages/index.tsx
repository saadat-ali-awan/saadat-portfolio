import Head from 'next/head'
import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <div className={styles['main-body']}>
        Hello World
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      base_url: process.env.BASE_URL,
    }
  }
}
