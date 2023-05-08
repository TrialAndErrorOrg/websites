export const addBigLetterToBody = (body: string) =>
  body?.replace(/<p>\s*([A-Z])/, '<p><span className="lettrine">$1</span>')
