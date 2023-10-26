'use client'
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./component/ProductCard";

export default function Home(){
  return(
<main>
  <h1>Belê, man!</h1>
  <Link href="/users">Users</Link>
  {/* Em vez de eu transformar esta page inteira em 'use client', eu faço isso só com o button */}
  <ProductCard />
</main>
)
}
