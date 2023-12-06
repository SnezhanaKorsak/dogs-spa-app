import React from "react";
import { getClient } from "@/lib/client";
import { PetProducts } from "@/types";
import { productsQuery } from "@/lib/graphql/queries";
import { getProductsByCategory } from "@/utils";

//export const revalidate = 3600;

type Props = {
  category: string;
};

export const Products: React.FC<Props> = async ({ category }) => {
  const { data }: { data: { getPetProducts: PetProducts[] } } =
    await getClient().query({ query: productsQuery });

  const { getPetProducts: products } = data;
  const filteredProductsByCategory = getProductsByCategory(products, category);

  return (
    <div>
      {filteredProductsByCategory.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  );
};
