import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Speciality from "@/components/speciality";
import WorldGlobe from "@/components/world-globe";
// import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <Speciality />
      <WorldGlobe />
      <Footer />
    </main>
  );
}
