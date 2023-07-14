import Head from 'next/head';
import Link from 'next/link';

function HomePage(){
  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}

function Header({ title }) {
return(
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
) 
}
function Body(){
  return(
    <>
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </>
  )
}

export default function App() {

  return <HomePage/>;
}