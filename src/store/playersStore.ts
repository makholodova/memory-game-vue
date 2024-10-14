import {defineStore} from "pinia";
import type {IPlayer} from "@/models/IPlayer";
import type {PlayerModel} from "@/models/PlayerModel";
//перепесать н адругой синтаксис
//result store?
export const usePlayerStore = defineStore('player', {
	state: () => ({
		newPlayer: [] as PlayerModel[],
		players: [] as IPlayer[],
		isInitialized: false,
	}),
	actions: {

		addNewPlayer(player: PlayerModel): void {
			this.newPlayer.push(player);
		},
		getLastPlayer():PlayerModel {
			return this.newPlayer[this.newPlayer.length - 1]
		},

		initPlayers() {
			if (!this.isInitialized) {
				this.players = this.getPlayers();
				this.isInitialized = true;
			}
		},
		getPlayers(): IPlayer[] {
			try {
				const items = localStorage.getItem('players');
				return items ? JSON.parse(items) : [];
			} catch (error) {
				console.error('Error parsing todos from localStorage:', error);
				return [];
			}
		},
		getLastPlayers(): IPlayer[] {
			return this.players.slice(-10).reverse();
		},
		addPlayer(player: IPlayer): void {
			this.initPlayers();
			this.players.push(player);
			this.saveToLocalStorage();
		},
		saveToLocalStorage(): void {
			localStorage.setItem('players', JSON.stringify(this.players));
		}
	},
});

