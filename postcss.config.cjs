module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 2,
      autoprefixer: { grid: true }
    }),
    require('postcss-preset-env'),
    require('postcss-nested'),
    require('postcss-custom-media')
  ]
}