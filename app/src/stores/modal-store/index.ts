import { writable } from 'svelte/store';

export function createModalStore() {
	const { subscribe, update } = writable(new Map());

	return {
		subscribe,
		addModalId: (id: string) => update(store => store.set(id, false)),
		openModal: (id: string) => {
			update(store => store.set(id, true))
			document.body.classList.add('modal-open');
		},
		closeModal: (id: string) => {
			update(store => store.set(id, false))
			document.body.classList.remove('modal-open');
		}
	}
}

export const modalStore = createModalStore();