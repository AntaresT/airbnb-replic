import Banner from '@/components/Banner'
import Header from '@/components/Header'
import MediumCard from '@/components/MediumCard'
import SmallCard from '@/components/SmallCard'
import Head from 'next/head'

type Countries = {
  img: string;
  location: string;
  distance: string;
}[]

type Places = {
  img: string;
  title: string;
}[]

export default function Home(
  {exploreData,cardsData}:{exploreData: Countries, cardsData: Places}) {

    return (
    <div className=''>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>
            Explore Nearby
          </h2>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 
          lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item, index) => (
              <SmallCard key={index} img={item.img} distance={item.distance} location={item.location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map((item, index) => (
              <MediumCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function  getStaticProps() {
  const exploreData = await fetch('http://localhost:3001/tiny-cards')
    .then((res) => res.json())

  const cardsData = await fetch('http://localhost:3001/medium-cards')
    .then((res) => res.json())

    return { props: {
      exploreData,
      cardsData
    }}
}