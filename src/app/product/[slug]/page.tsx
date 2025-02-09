'use client'
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../Types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type== "product" && slug.current == $slug][0]{
        _id,
        productName,
        _type,
        image,
        price,
        colors,
        status,
        description,
        inventory,
        }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

    const handleAddToCart=(e:React.MouseEvent, product:Product)=>{
      e.preventDefault()
      Swal.fire({
        position : 'top-right',
        icon : "success",
        title: `${product.productName} has been added to cart`,
        showConfirmButton: false,
        timer:2000,
        
      })
  
      addToCart(product)
  
    }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.productName}</h1>
          <p className="text-3xl font-semibold font-sans">{`$ ${product.price}`}</p>
          <p className="">{product.description}</p>
          <p className="text-gray-500 mt-1  text-right">{product.category}</p>
          <p className="text-left text-2xl ">{product.colors}</p>
          <p className="mt-1 font-semibold">
            Stocks : {product.inventory} pcs{" "}
          </p>
          <p className="text-center mb-1 bg-yellow-400">{product.status}</p>
          <button className="bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e)=>handleAddToCart(e, product)}
                >
                  Add To Cart
                </button>        </div>
      </div>
    </div>
  );
}
