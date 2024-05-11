import AboutMe from "@/components/AboutMe";
import BuyMeCoffee from "@/components/BuyMeCoffee";
import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import Testimonials from "@/components/Testimonials";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero
        title="Hi, I'm Nico!"
        subtitle="An award-winning software engineer"
        imageMobile="home/hero_image_mobile.webp"
        imageDesktop="home/hero_image_desktop.webp"
      />
      <Featured />
      <AboutMe />
      <ProjectList />
      <Testimonials />
      <Contact />
      <BuyMeCoffee />
    </>
  );
};

export default HomePage;
