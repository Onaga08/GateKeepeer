import Head from 'next/head'
import UserCard from '@/components/cards/UserCard'
import boy from './boy-1.jpg'
import girl from './girl-1.jpg'

export default function User() {
    
        const handleClick = () => {
          console.log('Button clicked!');
        };
      
    return (
        <>
        <Head>
            <title>User | GateKeeper</title>
            <meta name="description" content="GateKeeper for SEPM" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=" bg-gradient-to-r from-green-400 to-blue-500 h-screen flex justify-between text-gray-300 font-bold text-3xl w-full bg-clip-border">
            <div className='flex flex-col grow m-5 gap-5'>
                <div className='shrink flex justify-center'>Gatekeeper</div>
                <div className='flex flex-row grow m-5 gap-5'>
                <UserCard
                    imageUrl={girl}
                    title="Entry Request"
                    description="Guest Name: Aayushii Singh "
                    onClick={handleClick}
                />
                <UserCard
                    imageUrl={boy}
                    title="Entry Request"
                    description="Guest Name: Aryan Singh "
                    onClick={handleClick}
                />
                
                </div>
                
            </div>

        </main>
        </>
    )
}