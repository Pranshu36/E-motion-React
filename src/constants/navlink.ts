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
