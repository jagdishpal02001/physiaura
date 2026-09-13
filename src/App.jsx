import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import HowItWorks from './components/HowItWorks';
import Conditions from './components/Conditions';
import Compare from './components/Compare';
import WhyUs from './components/WhyUs';
import FirstVisit from './components/FirstVisit';
import Areas from './components/Areas';
import Stories from './components/Stories';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatButtons from './components/FloatButtons';
import ScrollProgress from './components/ScrollProgress';
import { useReveal } from './hooks/useReveal';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <>
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <TrustMarquee />
        <HowItWorks />
        <Conditions />
        <Compare />
        <WhyUs />
        <FirstVisit />
        <Areas />
        <Stories />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatButtons />
    </>
  );
}
