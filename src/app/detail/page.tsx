import HomepageSkills from "@/components/Homepage/HomepageSkills";
import ThreeProjects from "@/components/Homepage/ThreeProjects";
import AboutMe from "@/components/details/AboutMe";
import Certification from "@/components/details/Certification";
import Professionals from "@/components/details/Professionals";
import Projects from "@/components/details/Projects";
import Skills from "@/components/details/Skills";
import {
  aboutMe,
  certification,
  professionalData,
  projects,
  skills,
} from "@/data/page-data";

export default function Detail() {
  return (
    <>
      <AboutMe data={aboutMe} />
      <HomepageSkills data={skills} />
      <Professionals data={professionalData} />

      <Certification data={certification} />
      {/* @ts-ignore */}
      <ThreeProjects />
    </>
  );
}
