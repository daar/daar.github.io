export type Photo = {
  // Photo ID (unique). It will also become the URL slug.
  id: number | string
  // Photo title
  title: string
  // Photo URL (can be absolute or relative to the public folder)
  url: string
  // Photo description
  description: string
}

export const photos: Photo[] = [
  {
    id: 1,
    title: 'Casper',
    description:
      "Death by JavaScript: When you're so async, you forget to await your own life.",
    url: '/img/wp001.jpg',
  },
  {
    id: 2,
    title: 'Death by JavaScript',
    description:
      'Why did the developer die? They kept trying to destructure the meaning of life and got `undefined`.',
    url: '/img/wp002.jpg',
  },
  {
    id: 3,
    title: 'Death by JavaScript',
    description:
      'The developer passed away from trying to debug an obfuscated script in production.',
    url: '/img/wp003.jpg',
  },
  {
    id: 4,
    title: 'Peace lilly',
    description:
      'How did the coder die? By getting lost in an array and never finding a way out.',
    url: '/img/wp004.jpg',
  },
  {
    id: 5,
    title: 'Death by JavaScript',
    description:
      'Why did the developer pass away? They kept hitting `ctrl + alt + delete` on their life.',
    url: '/img/wp005.jpg',
  },
  {
    id: 6,
    title: 'Death by JavaScript',
    description:
      'How did the programmer meet their end? The recursion in their life stack overflowed.',
    url: '/img/wp006.jpg',
  },
]
