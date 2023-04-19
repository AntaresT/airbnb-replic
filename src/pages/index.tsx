import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />
    </div>
  )
}
