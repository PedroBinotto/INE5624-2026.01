// Current exhibitions, seeded from the museum's real navigation tree
// (window.uzh_nav). Images reuse the slideshow assets as placeholders.
// Edit freely — this is the single source of truth for the Exhibitions grid
// and the single-exhibition pages.

export const exhibitions = [
  {
    slug: 'native-animals',
    title: 'Discover our native animals',
    teaser: 'Meet the wildlife of Switzerland, from alpine ibex to the creatures of forest and stream.',
    image: '/assets/img-1.jpg',
    floor: 'Ground floor',
    dates: 'Permanent exhibition',
    body: [
      'Switzerland’s landscapes — from lakeshores to high alpine ridges — are home to a surprising diversity of animals. This hall brings them together in lifelike dioramas.',
      'Follow the seasons through the eyes of native species and learn how each has adapted to its habitat.',
    ],
  },
  {
    slug: 'plants-talk',
    title: 'Plants talk',
    teaser: 'Plants communicate, defend themselves and cooperate. Step into their hidden conversations.',
    image: '/assets/img-2.jpg',
    floor: 'First floor',
    dates: 'Permanent exhibition',
    body: [
      'Far from passive, plants exchange chemical signals, warn their neighbours and strike alliances with fungi and insects.',
      'Interactive stations let you eavesdrop on the chemistry that keeps an ecosystem talking.',
    ],
  },
  {
    slug: 'monte-san-giorgio',
    title: 'Monte San Giorgio',
    teaser: 'A UNESCO World Heritage fossil site and its astonishing Triassic marine reptiles.',
    image: '/assets/img-3.jpg',
    floor: 'First floor',
    dates: 'Permanent exhibition',
    body: [
      'The Monte San Giorgio, on the Swiss–Italian border, preserves one of the world’s richest records of Middle Triassic marine life.',
      'Original fossils reveal reptiles, fish and invertebrates that swam here 240 million years ago.',
    ],
  },
  {
    slug: 'dinosaurs',
    title: 'Experience dinosaurs up close',
    teaser: 'Towering skeletons and the latest research on how dinosaurs really lived.',
    image: '/assets/img-1.jpg',
    floor: 'Ground floor',
    dates: 'Permanent exhibition',
    body: [
      'Stand beneath mounted skeletons and reconstructions, and discover what fossils tell us about dinosaur biology, movement and extinction.',
      'A highlight for visitors of every age.',
    ],
  },
  {
    slug: 'masterpieces',
    title: 'Treasure vault with masterpieces',
    teaser: 'Rare specimens and historic preparations from the university’s scientific collections.',
    image: '/assets/img-2.jpg',
    floor: 'First floor',
    dates: 'Permanent exhibition',
    body: [
      'A curated selection of the most precious and scientifically significant objects held by the museum.',
      'Each piece carries a story of discovery, craft and the history of natural science in Zurich.',
    ],
  },
  {
    slug: 'orsas-world',
    title: 'The Ice Age with ‘Orsa’ – the Neanderthal',
    teaser: 'Travel back to the last Ice Age and meet Orsa, a reconstructed Neanderthal.',
    image: '/assets/img-3.jpg',
    floor: 'Ground floor',
    dates: 'Permanent exhibition',
    body: [
      'Through Orsa’s eyes, explore the climate, animals and daily survival of Ice Age Europe.',
      'Reconstructions and original finds bring a vanished world within reach.',
    ],
  },
  {
    slug: 'animals-of-the-world',
    title: 'Discover animals from all over the world',
    teaser: 'A global journey through habitats and the animals that shape them.',
    image: '/assets/img-1.jpg',
    floor: 'First floor',
    dates: 'Permanent exhibition',
    body: [
      'From rainforest canopies to ocean depths, this hall surveys the breadth of animal life across the planet.',
      'Compare adaptations and see how species thrive in extraordinary conditions.',
    ],
  },
  {
    slug: 'bipedalism',
    title: 'Diverse bipeds: How humans learned to walk',
    teaser: 'The evolutionary story of upright walking and what it made possible.',
    image: '/assets/img-2.jpg',
    floor: 'First floor',
    dates: 'Permanent exhibition',
    body: [
      'Walking on two legs reshaped the human body and freed the hands. This exhibition traces that transformation across millions of years.',
      'Casts, models and comparisons with other primates reveal how — and why — our ancestors stood up.',
    ],
  },
];

export const getExhibition = (slug) => exhibitions.find((e) => e.slug === slug);
