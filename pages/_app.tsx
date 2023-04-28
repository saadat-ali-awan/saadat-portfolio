import '@/styles/global.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from 'next/app';
import { SectionStateProvider } from 'context/section_state_provider';
import { SessionProvider } from 'next-auth/react';
import { Analytics } from '@vercel/analytics/react';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps: {
  session,
  ...pageProps
} }: AppProps) {

  console.log(process.env["BASE_URL"]);
  return (
    <SessionProvider session={session}>
      <SectionStateProvider >
        <Component {...pageProps} />
        <Analytics />
      </SectionStateProvider>
    </SessionProvider>
  );
}
