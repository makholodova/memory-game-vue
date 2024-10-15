import {defineStore} from "pinia";
import type {PlayerModel} from "@/models/PlayerModel";

export const useGameStore = defineStore('game', {
	state: () => ({
		player: [] as PlayerModel[],
		score: 0,
		board: false,
	}),
	actions: {
		addPlayer(player: PlayerModel): void {
			this.player.push(player);
		},
		getLastPlayer(): PlayerModel {
			return this.player[this.player.length - 1]
		},
		increaseScore() {
			this.score++;
		},
	},
});

