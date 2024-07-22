import Link from "next/link";

export default function Home() {
  return ( 
    <div>
      <h1>Home</h1>
      <p>Home page content</p>
      <Link href="/my-page">
        <a>Springboot link</a>
      </Link>      

    </div>
  );
}
