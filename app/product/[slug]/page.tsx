import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

async function getProduct(slug: string) {
  const product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    price,
    description,
    "imageUrl": image[0].asset->url
  }`, { slug });
  return product;
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={urlFor(product.imageUrl).url()}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <p className="mb-6">{product.description}</p>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}