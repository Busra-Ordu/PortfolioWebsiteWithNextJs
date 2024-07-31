import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
      <div class="container mx-auto px-12 py-4">
      <Hero/>
      </div>
      <Projects/>
      <Footer/>
    </main>
  );
}
