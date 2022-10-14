export const cx = (...classNames: (string | undefined | boolean | null)[]) =>
	classNames.filter(Boolean).join(' ')
