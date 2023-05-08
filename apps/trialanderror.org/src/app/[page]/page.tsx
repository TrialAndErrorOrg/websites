import { getPage } from '../../server/page';
import { Frame } from '../components/Frame';

export const revalidate = 3600; // revalidate every hour

export default async function AboutPage({
  params: { page },
}: {
  params: { page: string };
}) {
  const pageResult = await getPage(page);
  // if (!pageResult.title) {
  //   return <div>404</div>;
  // }

  const { title, block } = pageResult;
  return (
    <main className="flex flex-col items-center">
      <div className="w-screen">
        <Frame />
        <div className="pointer-events-none relative top-[20vh] left-[13vw] -z-10 min-h-screen w-[70vw] bg-blue-50 p-6 md:w-[60vw] md:p-10 lg:top-[30vh] 2xl:w-[40vw]">
          <article className="flex w-[45vw] flex-col justify-center gap-10 md:mb-[30vh] md:gap-20">
            <h1 className="-mt-10 text-4xl font-black text-blue-500 md:-mt-16 md:text-7xl">
              {title}
            </h1>
            {block?.map((block) => {
              return (
                <div
                  className="prose"
                  // @ts-expect-error does have an id
                  key={block.id}
                  dangerouslySetInnerHTML={{
                    __html: block.body ?? '',
                  }}
                />
              );
            })}
          </article>
        </div>
      </div>
    </main>
  );
}
