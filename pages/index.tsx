import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/App/Hero'
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Hero/>
    </div>
  )
}

export default Home