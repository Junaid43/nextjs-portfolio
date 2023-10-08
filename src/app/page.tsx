import { aboutMe } from "@/data/page-data";
import { HomepageAbout } from "@/components/Homepage/HomepageAbout";
import { HomepageHeroSection } from "@/components/Homepage/HomepageHeroSection";
import ThreeProjects from "@/components/Homepage/ThreeProjects";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <HomepageHeroSection />

      <HomepageAbout data={aboutMe} />
      {/* @ts-ignore */}
      <ThreeProjects />

      <ContactForm />
    </>
  );
}
