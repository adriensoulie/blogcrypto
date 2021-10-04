import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      
      <div className="w-full max-w-8xl mx-auto">
        <div className="lg: flex">
          <Sidebar/>
          <h1>Home Page Content</h1>
        </div>
      </div>
    </div>
  )
}
