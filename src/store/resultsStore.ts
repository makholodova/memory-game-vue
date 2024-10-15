import {defineStore} from "pinia";
import type {IResult} from "@/models/IResult";

export const useResultsStore = defineStore('result', {
	state: () => ({
		results: [] as IResult[],
		isInitialized: false,
	}),
	actions: {
		initResults() {
			if (!this.isInitialized) {
				this.results = this.getResults();
				this.isInitialized = true;
			}
		},
		getResults(): IResult[] {
			try {
				const items = localStorage.getItem('players');
				return items ? JSON.parse(items) : [];
			} catch (error) {
				console.error('Error parsing todos from localStorage:', error);
				return [];
			}
		},
		getLastTenResults(): IResult[] {
			return this.results.slice(-10).reverse();
		},
		addResult(player: IResult): void {
			this.initResults();
			this.results.push(player);
			this.saveToLocalStorage();
		},
		saveToLocalStorage(): void {
			localStorage.setItem('players', JSON.stringify(this.results));
		}
	},
});

