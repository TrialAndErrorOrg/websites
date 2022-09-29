export default {
  routes: [
    {
      method: 'GET',
      path: '/front-page-cards',
      handler: 'front-page-cards.frontPageCards',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}
