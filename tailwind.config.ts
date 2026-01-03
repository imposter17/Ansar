import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-orbitron)'],
        body: ['var(--font-inter)']
      },
      colors: {
        midnight: '#080A12',
        aurora: '#0F172A',
        neon: '#7C3AED',
        mint: '#22d3ee',
        accent: '#8B5CF6'
      },
      boxShadow: {
        glow: '0 10px 80px rgba(124,58,237,0.35)',
        soft: '0 4px 30px rgba(0,0,0,0.25)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.08), transparent 25%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.09), transparent 30%), radial-gradient(circle at 50% 80%, rgba(16,185,129,0.07), transparent 25%)'
      }
    }
  },
  plugins: []
};
export default config;
