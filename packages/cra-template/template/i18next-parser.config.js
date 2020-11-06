module.exports = {
  defaultNamespace: 'default',
  locales: ['en', 'fr'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{js,jsx}'],
  verbose: true,
};
