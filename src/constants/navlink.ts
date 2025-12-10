import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export interface NavLinkType {
  label: string;
  path: string;
}

export const NAVLINKS: NavLinkType[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const FOOTER_ICONS = [
  { link: '#', icon: FaFacebook },
  { link: '#', icon: FaTwitter },
  { link: '#', icon: FaInstagram },
  { link: '#', icon: FaLinkedin },
];
