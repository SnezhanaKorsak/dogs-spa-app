import { PetProducts } from "@/types";

export const getProductsByCategory = (
  products: PetProducts[],
  category: string,
): PetProducts[] => {
  return products.filter((product) => product.category === category);
};
