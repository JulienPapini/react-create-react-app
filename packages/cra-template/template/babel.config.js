module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: '.',
        extensions: ['.js', '.jsx', '.json'],
        alias: {
          '@app': './src',
        },
      },
    ],
  ],
};
