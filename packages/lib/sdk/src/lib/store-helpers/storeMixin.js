/**
 * @template T
 * @returns {{subscribe: (fn: (value: T | undefined) => unknown) => () => unknown, publish: (value: T) => unknown}}
 */
export const storeMixin = () => {
	const subscribers = new Set();

	/** @type {T | undefined} */
	let currentValue = undefined;
	return {
		subscribe: (fn) => {
			subscribers.add(fn);

			fn(currentValue);
			return () => subscribers.delete(fn);
		},
		publish: (value) => {
			currentValue = value;
			subscribers.forEach((fn) => fn(value));
		}
	};
};
