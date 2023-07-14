import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";

export default function FirstoPost(){
    return (
    <>
    <Head>
        <title>Firts page</title>
    </Head>
        <h1>First post</h1>
        <h2>
            <Link href="/">Back to home</Link>
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