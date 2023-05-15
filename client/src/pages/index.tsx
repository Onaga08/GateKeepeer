import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { LoginTab } from "@/components/login"
import { FiTwitter,FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Head>
        <title>GateKeeper</title>
        <meta name="description" content="GateKeeper for SEPM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gradient-to-r from-green-400 to-blue-500 h-screen flex justify-between text-gray-300 font-bold text-3xl w-full bg-clip-border">
        <div className="flex-grow flex justify-center">
          <div className="flex flex-col justify-center font-semibold text-[8rem] px-10">GateKeeper</div>
          <div className='flex flex-col justify-center'><LoginTab /></div>
        </div>
        <div className="flex flex-col justify-end p-10">
          <div className="flex flex-col gap-16">
            <div className=""><Link href={`https://twitter.com/meltedhyperion`}><FiTwitter /></Link></div>
            <div className=""><Link href={`https://www.linkedin.com/in/aryan-singh-337699221/`}><FiLinkedin/></Link></div>   
            <div className=""><Link href={`https://instagram.com/aryansingh.dev`}><FiInstagram/></Link></div>
            <div className=""><Link href={`https://github.com/meltedhyperion`}><FiGithub /></Link></div>
          </div>
        </div>
      </main>
    </>
  )
}
