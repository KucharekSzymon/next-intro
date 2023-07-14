import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";
import Script from 'next/script';


export default function FirstoPost(){
    return (
    <>
        <Head>
            <title>Firts page</title>
        </Head>

        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
        />

        <h1>First post</h1>

        <h2>
        <Link href="/">← Back to home</Link>
        </h2>

        <div>
            <Image
                src="/images/profile.jpg"
                height="144"
                width="144"
                alt="Name image"
            />
        </div>
    </>
    )
}