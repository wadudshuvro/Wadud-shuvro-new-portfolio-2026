export default function manifest() {
  return {
    name: 'Wadud Shuvro Portfolio',
    short_name: 'Wadud Portfolio',
    description:
      'Portfolio website of Wadud Shuvro, frontend web developer specializing in modern, performant web applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    lang: 'en',
    icons: [
      {
        src: '/file.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
