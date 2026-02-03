import type { Attribute } from "@strapi/strapi";
import { cache } from "react";
import { strapi } from "./strapi";

export const getPerson = cache(async (slug: string) => {
	const person = await strapi
		.from<Attribute.GetValues<"api::team-member.team-member">>("team-members")
		.select(["bio"])
		.populateWith("image", undefined, true)

		.equalTo("slug", slug)
		.populateDeep([
			{
				path: "blog_posts",
				fields: ["title", "slug", "excerpt", "publishDate", "publishedAt"],
				children: "*",
			},
		])
		.get();

	if (!person.data?.[0]) {
		const blogAuthor = await strapi
			.from<Attribute.GetValues<"api::blog-author.blog-author">>("blog-authors")
			.select()
			.populateWith("image", undefined, true)
			.populateDeep([
				{
					path: "blog_posts",
					fields: ["title", "slug", "excerpt", "publishDate", "publishedAt"],
					children: "*",
				},
			])
			.equalTo("slug", slug)
			.get();

		return blogAuthor?.data?.[0];
	}

	return person?.data?.[0];
});
