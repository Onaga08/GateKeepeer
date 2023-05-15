import Head from 'next/head'

export default function Security() {
    return (
        <>
        <Head>
            <title>Security | GateKeeper</title>
            <meta name="description" content="GateKeeper for SEPM" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=" bg-gradient-to-r from-green-400 to-blue-500 h-screen flex justify-between text-gray-300 font-bold text-3xl w-full bg-clip-border">
            <div className='flex flex-col grow'>
                <div className='shrink flex justify-center m-1'>Gatekeeper</div>

            </div>

        </main>
        </>
    )
}