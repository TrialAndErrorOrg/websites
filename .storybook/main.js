const { StoryBookConfig } = require('@storybook/core-common')
/**
 * @type StoryBookConfig
 */
const config = {
  core: {
    builder: 'webpack5',
  },
  stories: [],
  addons: ['@storybook/addon-essentials', 'storybook-addon-swc'],
  // core: { builder: '@storybook/builder-vite' }, // 👈 The builder enabled here./ uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
}

module.exports = config
