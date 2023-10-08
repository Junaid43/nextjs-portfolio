import AboutMe from "@/components/details/AboutMe";
// import Certification from "@/components/Certification";
import { aboutMe, certification } from "@/data/page-data";
import { HomepageAbout } from "@/components/Homepage/HomepageAbout";

export default function AboutPage() {
  return (
    <main>
      <section>
        <div className="bg-black min-h-[32rem] text-white flex justify-center items-center">
          <h1> About Us</h1>
        </div>
      </section>
      <HomepageAbout data={aboutMe} />
      {/* <Certification data={certification} /> */}
    </main>
  );
}
