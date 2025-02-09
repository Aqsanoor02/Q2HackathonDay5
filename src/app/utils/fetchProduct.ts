import { client } from "@/sanity/lib/client";
import { Product } from "../../../Types/products";
import { groq } from "next-sanity";

export async function fetchProduct(slug: string): Promise<Product> {
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
        category
    }`,
    { slug }
  );
}
