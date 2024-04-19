import Head from 'next/head'
import styles from '@/pages/index.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <div className={styles['main-body']}>
        Hello World
      </div>
      
            <!-- AudienceLab Pixel Code -->
            <Script>
                const pixelId = '167c6fff-4e90-4a7f-b24a-c6afc1669f29';
            </Script>
            <Script src="https://cdn.audiencelab.io/pixel_V2.js"></Script>
            <!-- End AudienceLab Pixel Code -->
        
    </div>
  )
}
