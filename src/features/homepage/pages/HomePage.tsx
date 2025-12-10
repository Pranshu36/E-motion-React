import FaqSection from '../components/FaqSection';
import FeatureSection from '../components/FeatureSection';
import GallerySection from '../components/GallerySection';
import Poster from '../components/Poster';
import ProcedureSection from '../components/ProcedureSection';

export default function HomePage() {
  return (
    <main aria-label='home page'>
      <Poster />
      <ProcedureSection />
      <FeatureSection />
      <GallerySection />
      <FaqSection />
    </main>
  );
}
