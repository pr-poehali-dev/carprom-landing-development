import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsAndInfo from "@/components/ProductsAndInfo";
import ContactFormAndFooter from "@/components/ContactFormAndFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsAndInfo />
      <ContactFormAndFooter />
    </div>
  );
};

export default Index;
