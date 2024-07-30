import Link from "next/link";
import ProductCard from "./components/ProductCard";
import GetData from "./components/getdata"; // Import the GetData component
import AddData from "./components/addData"; // Import the AddData component

export default function Home() {
  return ( 
    <main> <h1>Home</h1>
      <p>Home page content</p> 
      <Link href="/users">Users</Link>
      <ProductCard />
      <GetData/>
      <AddData/>

      </main>

  );
}
