import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const localStore = (
	name,
	initialValue,
	toStorage = [],
	fromStorage = []
) => {
	if (browser && window?.localStorage) {
		const storedValue = window.localStorage.getItem(name);

		if (storedValue) {
			initialValue = fromStorage.reduce((acc, fn) => fn(acc), storedValue);
		}
	}

	const { subscribe, set, update } = writable(initialValue);

	return {
		subscribe,
		update,
		set: (x) => {
			if (window?.localStorage) {
				window.localStorage.setItem(
					name,
					toStorage.reduce((acc, fn) => fn(acc), x)
				);
			}
			set(x);
		}
	};
};
