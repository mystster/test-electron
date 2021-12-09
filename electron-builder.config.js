if (process.env.VITE_APP_VERSION === undefined) {
  process.env.VITE_APP_VERSION = '1.0.1';
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: 'mystster.test-electron',
  productName: 'test-electron',
  directories: {
    output: 'dist',
    buildResources: 'buildResources',
  },
  win: {
    target: ['nsis', 'zip'],
  },
  files: [
    'packages/**/dist/**',
  ],
  extraMetadata: {
    version: process.env.VITE_APP_VERSION,
  },
};

module.exports = config;
