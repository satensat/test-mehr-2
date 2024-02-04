import AboutUsCarousel from "@/components/about-us/AboutUsCarousel";
import CardsAboutUs from "@/components/about-us/CardsAboutUs";

export default function AboutUsPage() {
  return (
    <section className="w-full flex flex-col px-5 lg:px-10 max-w-[1600px]  mx-auto mb-5 scroll-smooth relative ">
      <CardsAboutUs />
      <AboutUsCarousel />
    </section>
  );
}
