import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";
import Image from 'next/image';
import { JSX } from 'react';


export const metadata: Metadata = {
  title: 'React Audio',
  description: 'An open-source audio package for React.',
  authors: [
    {
      name: 'MJ Anglin',
      url: 'https://www.mjanglin.com',
    },
  ],
  creator: 'MJ Anglin',
  keywords: [
    'react',
    'audio',
    'react audio',
    'react audio package',
    'react audio library',
    'react audio player',
    'audio',
    'typescript',
    'wav',
    'mp3',
    'ogg',
    'media',
    'player',
    'music',
    'sound',
    'play',
    'pause',
    'stop',
    'volume',
    'seek',
    'progress',
    'time',
    'duration',
    'metadata',
    'loading',
    'error',
    'next',
    'api',
    'waveform',
    'waveform api',
    'waveform data',
    'waveform image',
  ],
  openGraph: {
    title: 'React Audio',
    description: 'An open-source audio package for React.',
  },
}

const navbar = (
  <Navbar
    logo={
      <header className='flex items-center gap-2'>
        <Image src={'/apple-touch-icon.png'} alt="React Audio Logo" width={32} height={32} />
        <b>
          React Audio
        </b>
      </header>
    }
    logoLink="/"
    projectIcon={<Image
      src={'/github.png'}
      alt="React Audio Logo"
      width={32}
      height={32}
    />}
    projectLink="https://github.com/clxrity/react-audio"
  />
);

const footer = <Footer>
  <p>MIT {new Date().getFullYear()} © MJ Anglin</p>
</Footer>

const banner = <Banner>
  <code>
    npm i @clxrity/react-audio
  </code>
</Banner>

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): Promise<JSX.Element> {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        />
      </Head>
      <body className={`antialiased`}>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            defaultOpen: true,
            autoCollapse: true,
          }}
          pageMap={await getPageMap()}
          docsRepositoryBase='https://github.com/clxrity/react-audio/tree/main/apps/docs'
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
