import Head from "next/head";
import Image from "next/image";
import Home from "../components/home/Home";
import getCommerce from "../lib/commerce";

export default function HomePage({ products }) {
  console.log({ products });
  return (
    <div>
      <Head>
        <title>Savorys | THC Infused Green Coffee</title>
        <meta name="description" content="Savory's THC Infused Green Coffee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const commerce = getCommerce();

  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}
