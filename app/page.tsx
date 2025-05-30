import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import WorldGlobe from "@/components/world-globe";
// import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Experience />
      {/* <Portfolio /> */}
      <WorldGlobe />
    </main>
  );
}
