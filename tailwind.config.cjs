module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: { extend: {
      colors: {
        primary: '#E50914', // vermelho destaque
        secondary: '#0D0D0D', // fundo escuro
        accent: '#16F29B', // verde neon sutil
      },
    },
  },
  plugins: [],
}

