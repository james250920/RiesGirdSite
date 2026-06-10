import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
    },
  },
}
