import { writable } from 'svelte/store';

export function createModalStore() {
	const { subscribe, update } = writable(new Map());

	return {
		subscribe,
		addModalId: (id: string) => update(store => store.set(id, false)),
		openModal: (id: string) => update(store => store.set(id, true)),
		closeModal: (id: string) => update(store => store.set(id, false))
	}
}

export const modalStore = createModalStore();