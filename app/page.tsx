import Hero from "@/components/Hero";
import PeopleSaying from "@/components/PeopleSaying";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Tutors from "@/components/Tutors";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section2 />
      <Section3 />
      <Tutors />
      <PeopleSaying />
    </main>
  );
}
