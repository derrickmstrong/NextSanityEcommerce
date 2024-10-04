import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

export default function ProductList({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link href={`/product/${product.slug.current}`} key={product._id} className="group">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image
              src={urlFor(product.imageUrl).url()}
              alt={product.name}
              width={300}
              height={300}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}