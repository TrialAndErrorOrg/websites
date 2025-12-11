import { notFound } from "next/navigation";
import { getPage } from "../../server/page";
import { createMetadata } from "../../utils/createMetadata";
import { CookieBanner } from "../components/CookieBanner";
import { Frame } from "../components/Frame";
import { GoogleScript } from "./google-script";

export const revalidate = 3600; // revalidate every hour

type Props = {
	params: { page: string };
};
const GOOGLE_AD_PAGES = [
	"donate",
	"thankyou",
	...(process.env.GOOGLE_AD_PAGES?.split(",") ?? []),
] as const;

export async function generateMetadata({ params }: Props) {
	const { seo, title, slug } = await getPage(params.page);

	return createMetadata({
		title: seo?.metaTitle ?? title,
		description: seo?.metaDescription ?? "",
		canonical: slug,
	});
}

export default async function AboutPage({ params: { page } }: Props) {
	const pageResult = await getPage(page);

	const { title, block } = pageResult;
	if (!title) {
		notFound();
	}
	return (
		<>
			<main className="flex flex-col items-center">
				<div className="w-screen">
					<Frame />
					<div className="relative left-[13vw] top-20 mb-80 min-h-screen w-[75vw] bg-blue-50 p-6 md:top-60 md:w-[60vw] md:p-10 2xl:w-[40vw]">
						<article className="mb-10 flex flex-col justify-center gap-10 md:w-[45vw] md:gap-20">
							<h1 className="-mt-10 text-4xl font-black text-blue-500 md:-mt-16 md:text-7xl">
								{title}
							</h1>
							{block?.map((b) => (
								<div
									className="prose hyphens-auto"
									key={b.id}
									dangerouslySetInnerHTML={{
										__html: b.body ?? "",
									}}
								/>
							))}
						</article>
					</div>
				</div>
			</main>

			{GOOGLE_AD_PAGES.includes(page) && (
				<>
					<GoogleScript />
					<CookieBanner />
				</>
			)}
		</>
	);
}
