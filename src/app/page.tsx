import Herosection from "./component/Herosection";
import Navbar from ".//component/Navbar"
import AboutSection from "./component/AboutSection"
export default function Home() {
  return (
    
      <main className="flex min-h-screen flex-col bg-[#121212] container">
        <Navbar/>
        <div className="container  mx-auto px-12 py-4">
        <Herosection />
        <AboutSection />
        </div>

      </main>
       )
      }