import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import ProductsSection from "../components/ProductsSection";
import SolutionsSection from "../components/SolutionsSection";
import ClientsSection from "../components/ClientsSection";
import CareersSection from "../components/CareersSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProductsSection />
      <SolutionsSection />
      <ClientsSection />
      <CareersSection />
      <ContactSection />
    </>
  );
}
