const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5173'
  },
  component: {
    specPattern: [
      'src/**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/integration/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    ],
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  }
})
