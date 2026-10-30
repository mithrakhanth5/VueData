import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TechStackSection from "../components/TechStackSection";
import SolutionsSection from "../components/SolutionsSection";
import ProductsSection from "../components/ProductsSection";
import ClientsSection from "../components/ClientsSection";
import CareersSection from "../components/CareersSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <SolutionsSection />
      <ProductsSection />
      <ClientsSection />
      <CareersSection />
      <ContactSection />
    </>
  );
}
