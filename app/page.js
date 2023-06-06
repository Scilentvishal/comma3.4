import Main from './components/home/Main'
export const metadata = {
  title: 'Comma Tech | Best web development services | In Wardha',
  description: 'About Commatechnologies',
  openGraph: {
    url: 'https://commatech.in',
    siteName: 'commatech.in',
    images: [
      {
        url: 'https://commstech.in',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <div>
        <Main />

      </div>
    </>
  )
}
