import Head from 'next/head';
import Link from 'next/link';

function Header({ title }) {
return(
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="title">
      Read <Link href="/posts/first-post">this page!</Link>
    </h1>
  </>
) 
}

export default function HomePage() {

  return (
    <Header/>
  );
}