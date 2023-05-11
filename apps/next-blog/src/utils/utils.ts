export const getFormattedDate = (date?: string) =>
  (date ? new Date(date) : new Date()).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
