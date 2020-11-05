module.exports = {
  plugins: [
    [
      'module-resolver',
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
