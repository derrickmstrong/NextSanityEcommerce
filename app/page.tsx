import { client } from '@/lib/sanity';
import ProductList from '@/components/product-list';

async function getProducts() {
  const products = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    slug,
    price,
    "imageUrl": image[0].asset->url
  }`);
  return products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Store</h1>
      <ProductList products={products} />
    </div>
  );
}