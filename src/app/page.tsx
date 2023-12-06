import { WelcomeBanner } from "@/components/welcome-banner";
import { CurrentSpaOffer } from "@/components/current-spa-offer";
import { Products } from "@/components/products";

import { ProductsCategory } from "@/constants";

const HomePage = async () => {
  return (
    <main>
      <WelcomeBanner />
      <CurrentSpaOffer />
      <Products category={ProductsCategory.DogCollars} />
      <hr />
      <Products category={ProductsCategory.PetCarriers} />
    </main>
  );
};

export default HomePage;
