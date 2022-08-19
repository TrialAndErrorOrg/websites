export default {
  enabled: true,
  config: {
    maxDepth: 3,
    layouts: {
      menuItem: {
        link: [
          {
            input: {
              label: 'Icon',
              name: 'icon',
              type: 'media',
            },
          },
          {
            input: {
              label: 'Description',
              name: 'description',
              type: 'text',
              maxLength: 100,
            },
          },
        ],
      },
    },
  },
}
