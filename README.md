# Center of Trial & Error

Monorepo used for creating https://trialanderror.org

## Structure

Most important are the three main applications

- `apps/frontend` - the actual Next.js website
- `apps/strapi` - the Strapi backend
- `apps/blog` - the Astro blog

The rest is just a bunch of packages that are used by the two main applications.

## Development

To start, you need to have the strapi instance running.

```bash
yarn
cd apps/strapi
yarn
yarn develop
```

Then you can start the main website in another terminal.

```bash
nx serve frontend
```

which will open up the website at http://localhost:4200

Or you can start the blog.

```bash
nx serve blog
```

TODO: Figure out a way to seed the database with some initial data without having to manually create it in the admin panel or using the production database.

### Frontend
