// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include your React component files
  ],
  theme: {
    extend: {
      colors: {
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(0, 0, 0, 0.5)',
        'glass-blue': 'rgba(38, 99, 255, 0.7)',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        DEFAULT: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
    },
  },
  plugins: [],
};


