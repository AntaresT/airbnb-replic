import Banner from '@/components/Banner'
import Header from '@/components/Header'
import SmallCard from '@/components/SmallCard'
import Head from 'next/head'

type Countries = {
  exploreData: {
    img: string;
    location: string;
    distance: string;
  }[]
}

export default function Home(exploreData: Countries) {

  console.log(exploreData.exploreData, 'expl')

  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>
            Explore Nearby
          </h2>
          
          {exploreData.exploreData.map((item, index) => (
            <SmallCard key={index} img={item.img} distance={item.distance} location={item.location} />
          ))}
        </section>
      </main>
    </div>
  )
}

export async function  getStaticProps() {
  const exploreData = await fetch('http://localhost:3001/')
    .then(
      (res) => res.json()
      )

    return { props: {
      exploreData
    }}
}