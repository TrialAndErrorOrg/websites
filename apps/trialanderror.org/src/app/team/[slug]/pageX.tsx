import { strapiClient } from '../../../server/api/strapi';
import { GetAttributesValues } from '@strapi/strapi';
import { cache } from 'react';
import Image from 'next/image';
import {
  FaGithub,
  FaLink,
  FaLinkedin,
  FaOrcid,
  FaTwitter,
} from 'react-icons/fa';

export const getPerson = cache(async (slug: string) => {
  const person = await strapiClient
    .from<GetAttributesValues<'api::team-member.team-member'>>('team-members')
    .select()
    .populate()
    .equalTo('slug', slug)
    .get();

  return person;
});

export default async function PersonPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const {
    firstName,
    lastName,
    email,
    position,
    department,
    pronouns,
    show_pronouns,
    bio,
    summary,
    github,
    image,
    blog_posts,
    linkedin,
    mastodon,
    personalWebsite,
    twitter,
    orcid,
  } = (await getPerson(slug)).data?.[0] ?? {};

  return (
    <main>
      <h1 className="text-center text-4xl font-bold">
        <span>
          {firstName} {lastName}
        </span>

        {show_pronouns && (
          <p className="text-center text-3xl text-orange-500 dark:text-gray-400 md:text-4xl">
            {pronouns}
          </p>
        )}
      </h1>
      <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center">
        {image?.url && (
          <Image
            src={image?.url}
            alt={image?.alt}
            width={image?.width}
            height={image?.height}
            className="mx-auto h-40 w-40 rounded-full border-2 border-black object-cover md:h-60 md:w-60"
          />
        )}

        <div className="my-6 flex flex-col items-center justify-center">
          {position && (
            <p className="md:text-2x text-center text-xl text-black dark:text-gray-400">
              {position}
            </p>
          )}

          <div className="col-span-4 row-span-1 flex flex-wrap items-center justify-center gap-1 leading-none">
            {orcid && (
              <a
                href={orcid}
                className="button-sleek flex items-center  text-black"
              >
                <FaOrcid className="h-5 w-5" />
                <span className="sr-only">ORCID</span>
              </a>
            )}
            {twitter && (
              <a href={twitter} className="button-sleek z-10 flex items-center">
                <FaTwitter className="h-5 w-5" />
                <span className=" sr-only absolute">Twitter</span>
              </a>
            )}
            {github && (
              <a
                href={github}
                className="button-sleek z-10 flex items-center gap-1"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                className="button-sleek z-10 flex items-center gap-1"
              >
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {personalWebsite && (
              <a
                href={personalWebsite}
                className="button-sleek z-10 flex items-center gap-1"
              >
                <FaLink className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </a>
            )}
            {/* {email && (
              <div className="button-sleek z-10 flex items-center gap-1">
                <EmailRevealButton
                  client:load
                  classNameIcon="h-5 w-5"
                  classNameRevealed="underline font-semibold"
                  email={email}
                />
              </div>
            )} */}
          </div>
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: bio || summary || '' }}
        />
      </div>
      {blog_posts && (
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <h2 className="md:text-4x text-2xl font-bold">
            Blog Posts by {firstName} {lastName}
          </h2>
          {blog_posts.map((post) => (
            //<PostCard wide post={post} />)}
            <article className="prose relative">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a
                href={`https://blog.trialanderror.org/${post.slug}`}
                className="link-overlay"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
