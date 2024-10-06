import HeroSection from "./component/Herosection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectsSection from "./component/ProjectSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        
        <AboutSection />
        <ProjectsSection />
        
      </div>
      
    </main>
  );
}