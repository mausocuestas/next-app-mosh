import Image from "next/image";
import Link from "next/link";
import ProductCard from "./component/ProductCard";

export default function Home(){
  return(
<main>
  <h1>Belê, man!</h1>
  <Link href="/users">Users</Link>
</main>
)
}
