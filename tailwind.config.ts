import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    '~/components/**/*.{vue,js,ts}',
    '~/components/*.{vue,js,ts}',
    '~/layouts/**/*.vue',
    '~/layouts/*.vue',
    '~/pages/**/*.vue',
    '~/pages/*.vue',
    '~/app.vue',
    '~/plugins/**/*.{js,ts}',
    '~/plugins/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        mechRed: '#e43b35',
        mechOrange: '#f45729',
        mechYellow: '#ffcc00',
      },
      backgroundImage: {
        'mech-gradient': 'linear-gradient(to right, #e43b35, #f45729, #ffcc00)',
      },
    },
  },
}

