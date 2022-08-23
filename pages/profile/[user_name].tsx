import Head from 'next/head'
import styles from '@/pages/profile/profile.module.css'
import SidePanel from '@/components/side_panel'
import FirstSection from '@/components/homepage/first_section'
import SecondSection from '@/components/homepage/second_section'
import NavigationMenu from '@/components/navigation_menu'
import { FifthSection, FourthSection, SixthSection, ThirdSection } from '@/components/homepage/third_section'
import { AppSeedDataProvider } from 'context/app_seed_data_provider'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { user_name } = router.query
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <div className={styles['main-body']}>
        <AppSeedDataProvider user_name={user_name as string || ''}>
          <Content />
        </AppSeedDataProvider>
      </div>
    </div>
  )
}

function Content() {
  return (
    <>
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
    </>
  )
}

