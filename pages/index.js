import Head from 'next/head'
import Header from '../components/Header'
import Movies from '../components/Movies'
import Navbar from '../components/Navbar'
import requests from '../utils/requests'

export default function Home({results }) {
  return (
    <div>
      <Head>
        <title>Cinema House</title>
        <meta name="description" content="Cinema House Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Movies */}

      <Movies results={results}/>

    </div>
  )
}



export async function getServerSideProps(context) {
  const genre = context.query.genre || "fetchTrending";
  const request = await fetch(`
  https://api.themoviedb.org/3${requests[genre].url}
  `).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}