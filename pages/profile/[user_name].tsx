import Head from 'next/head'
import styles from '@/pages/profile/profile.module.css'
import SidePanel from '@/components/side_panel'
import FirstSection from '@/components/homepage/first_section'
import SecondSection from '@/components/homepage/second_section'
import NavigationMenu from '@/components/navigation_menu'
import { ThirdSection } from '@/components/homepage/third_section'
import { AppSeedDataProvider, useAppSeedData } from 'context/app_seed_data_provider'
import { useRouter } from 'next/router'
import { useSectionState } from 'context/section_state_provider'
import { useEffect } from 'react'
import FooterSection from '@/components/homepage/footer_section'

export default function Home({ base_url }: { base_url: string }) {
  const router = useRouter()
  const { user_name } = router.query

  if (!user_name) {
    return <div className={styles['loader-container']}>Loading</div>
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <div className={styles['main-body']}>
        <AppSeedDataProvider base_url={base_url}>
          <Content baseUrl={base_url}/>
        </AppSeedDataProvider>
      </div>
    </div>
  )
}

function Content({baseUrl}: {baseUrl: string}) {
  const { initSectionState } = useSectionState();
  const { initSeedData } = useAppSeedData()

  const router = useRouter()

  useEffect(() => {
    initSectionState()
    const { user_name } = router.query
    initSeedData(user_name as string)
  },[])
  return (
    <>
      <SidePanel baseUrl={baseUrl}/>
      <NavigationMenu />
      <main className={styles['main']}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FooterSection />
      </main>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      base_url: process.env["BASE_URL"],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

