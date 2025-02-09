"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../Types/products";
import { client } from "@/sanity/lib/client";
import { useClient } from "sanity";
import { urlFor } from "@/sanity/lib/image";
import { four } from "@/sanity/lib/queries";

const Card = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(four);
      setProduct(fetchedProduct);
    }
    fetchproduct();
  }, []);

 

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Our Latest Product
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <div
            key={product._id}
            className="border roundec-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <p className="text-center bg-yellow-400 mb-1">{product.status}</p>

            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt="image"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h2 className="text-lg font-semibold mt-4">
              {product.productName}
            </h2>
            <p className="text-gray-500 mt-2 text-right">
              {product.price ? `$${product.price}` : "Price is not available"}
            </p>
            <p className="text-gray-500 mt-1  text-right">{product.category}</p>
            <p className="text-right">{product.colors}</p>
            <p className="mt-1 font-semibold">
              Stocks : {product.inventory} pcs{" "}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Card;
