import { PetProducts } from "@/types";
import { ProductsCategory } from "@/constants";

export const getProductsByCategory = (
  products: PetProducts[],
  category: ProductsCategory,
): PetProducts[] => {
  return products.filter((product) => product.category === category);
};
