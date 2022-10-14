export const addBigLetterToBody = (body: string) =>
	body?.replace(/<p>\s*([A-Z])/, '<p><span class="lettrine">$1</span>')
