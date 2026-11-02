import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { DossierDemo } from "./components/DossierDemo";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { Institutions } from "./components/Institutions";
import { ClosingCta } from "./components/ClosingCta";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-magi-white text-magi-primary flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <DossierDemo />
        <HowItWorks />
        <Features />
        <Institutions />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
