import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return ( 
    <main> <h1>Home</h1>
      <p>Home page content</p> 
      <Link href="/users">Users</Link>
      <ProductCard />

      </main>

  );
}
