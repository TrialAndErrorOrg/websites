import type { GetAttributesValues } from '@strapi/strapi'
import { strapi } from './strapi'

export const getPosts = async (props?: { page?: number; pageSize?: number }) => {
	const posts = await strapi
		?.from<GetAttributesValues<'api::blog-post.blog-post'>>('blog-posts')
		.select()
		.populate()
		.sortBy([
			{ field: 'publishDate', order: 'desc' },
			{ field: 'publishedAt', order: 'desc' },
		])
		// .paginate(props?.page ?? 1, props?.pageSize ?? 10)
		.get()

	return posts?.data ?? []
}
