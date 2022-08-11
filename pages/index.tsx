import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import SidePanel from '@/components/side_panel'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['main-body']}>
        <SidePanel />
        <main>
          <h1 className={styles.title}>
            I'm <strong>Saadat Ali</strong>
          </h1>
        </main>
      </div>
      <footer className={styles.footer}>
        Made by&nbsp;<a href="https://twitter.com/Saadat02021999">Saadat Ali</a>
      </footer>
    </div>
  )
}
