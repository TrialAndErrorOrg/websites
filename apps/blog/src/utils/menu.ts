import type { Menu } from './types'
import { strapi } from './strapi'

export const getMain = async () => {
	return (
		(
			await strapi
				.from<Menu>('menus?nested=true')
				.select()
				.equalTo('slug', 'main')
				.populateDeep([
					{
						path: 'items',
						children: [
							{
								key: 'icon',
								fields: ['*'],
							},
							{ key: 'description', fields: ['*'] },
						],
					},
				])
				.get()
		)?.data?.[0]?.items ?? ([] as NonNullable<Menu['items']>)
	)
}

export const getUserMenu = async () =>
	(
		await strapi
			.from<Menu>('menus?nested=true')
			.select()
			.equalTo('slug', 'user-navigation')
			.populateDeep([
				{
					path: 'items',
					children: [
						{
							key: 'icon',
							fields: ['*'],
						},
					],
				},
			])
			.get()
	)?.data?.[0] ?? ({} as Menu)

export const getMenu = async (input: string) =>
	(await strapi.from<Menu>('menus?nested=true').select().equalTo('slug', input).populate().get())
		?.data?.[0]?.items ?? ([] as Menu['items'])
