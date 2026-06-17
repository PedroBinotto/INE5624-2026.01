// Top-bar navigation model. Edit here to change the menu.
// `children` makes an item a dropdown. Destinations that don't have a real page
// yet still get a descriptive route — they all fall through to the catch-all
// "*" route (NotImplemented), which derives its title from the path.

export const mainNav = [
  {
    label: 'Visitor Information',
    to: '/',
    children: [
      { label: 'Schedule visit', to: '/schedule-visit' },
      { label: 'Accessibility', to: '/accessibility' },
    ],
  },
  { label: 'Exhibitions', to: '/exhibitions' },
  { label: 'Agenda (in German)', to: '/agenda' },
  { label: 'Schools', to: '/schools' },
  {
    label: 'Guided Tours and Events',
    to: '/guided-tours',
    children: [
      { label: 'Registration for groups', to: '/registration-for-groups' },
      { label: 'Birthday parties for children', to: '/birthday-parties' },
    ],
  },
  { label: 'Collections', to: '/collections' },
];

export const serviceNav = [
  { label: 'Home', to: '/' },
  { label: 'Contact', to: '/contact' },
  { label: 'Deutsch', to: '/de' },
];
