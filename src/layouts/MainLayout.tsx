import { Outlet } from 'react-router-dom';

import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeProvider';

export default function MainLayout() {
  const { isDark } = useTheme();
  return (
    <div
      className={`${isDark ? 'bg-[#222222]' : 'bg-["#FAF9F6"]'} min-h-screen h-full min-w-[320px]`}
    >
      <Navbar />
      <Outlet />
      <FooterSection />
    </div>
  );
}
