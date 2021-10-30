import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
  preflight: false,
  extract: {
    include: [
      './site/(templates|snippets|controllers|models)/**/*.{php,html}'
    ],
  },
  safelist: ['prose', 'prose-sm', 'm-auto'],
  darkMode: 'class',
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
  ],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    }
  },
})
