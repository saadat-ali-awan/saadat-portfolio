import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import SidePanel from '@/components/side_panel'
import FirstSection from '@/components/homepage/first_section'
import SecondSection from '@/components/homepage/second_section'
import NavigationMenu from '@/components/navigation_menu'
import { FifthSection, FourthSection, SixthSection, ThirdSection } from '@/components/homepage/third_section'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <div className={styles['main-body']}>
        <SidePanel />
        <NavigationMenu />
        <main className={styles['main']}>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <footer className={styles.footer}>
            Made by&nbsp;<a href="https://twitter.com/Saadat02021999">Saadat Ali</a>
          </footer>
        </main>
      </div>
    </div>
  )
}
