const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // Minifier for production

module.exports = {
  mode: 'production', // Set mode to production for optimizations

  entry: './src/index.html', // Entry point for bundling (your main HTML file)

  output: {
    filename: 'main.bundle.js', // Name for bundled JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
  },

  module: {
    rules: [
      {
        test: /\.html$/, // Rule for handling HTML files
        use: {
          loader: 'html-loader',
        },
      },
      // Add rules for other loaders you might need (CSS, JS)
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ // Plugin to generate and optimize the HTML file
      template: './src/index.html', // Template for the generated HTML
      minify: { // Minification options for the generated HTML
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new TerserPlugin({ // Minify bundled JavaScript
      parallel: true,
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
        },
      },
    }),
  ],
};