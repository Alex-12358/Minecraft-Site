import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    '~/components/**/*.{vue,js,ts}',
    '~/layouts/**/*.vue',
    '~/pages/**/*.vue',
    '~/app.vue',
    '~/plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        mechRed: ['#e43b35'],
        mechOrange: ['#f45729'],
        mechYellow: ['#ffcc00'],
      },
      backgroundImage: {
        'mech-gradient': 'linear-gradient(to right, #e43b35, #f45729, #ffcc00)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
