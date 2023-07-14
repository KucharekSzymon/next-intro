import { useState } from 'react';
import Link from 'next/link';

function Header({ title }) {
return(
  <h1 className="title">
    Read <Link href="/posts/first-post">this page!</Link>
  </h1>
) 
}

export default function HomePage() {

  return (
    <Header/>
  );
}