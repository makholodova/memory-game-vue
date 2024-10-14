import {defineStore} from "pinia";


export const useTimerStore = defineStore('timer', {
	state: () => ({
		timeInSeconds: 0,
		isRunning: false,
		myInterval: undefined as number | undefined
	}),
	actions: {
		startTimer() {
			if (this.isRunning) {
				console.warn('Таймер уже запущен.');
				return;
			}
			this.isRunning = true;
			this.myInterval = window.setInterval(() => {
				this.timeInSeconds++;
			}, 1000);
		},

		pauseTimer(): void {
			clearInterval(this.myInterval);
			this.myInterval = undefined;
		},

		stopTimer(): void {
			if (!this.isRunning) {
				console.warn('Таймер уже остановлен.');
				return;
			}
			clearInterval(this.myInterval);
			this.myInterval = undefined;
			this.isRunning = false;
			this.timeInSeconds = 0;
		},

		formatTime(): string {
			const minutes = Math.floor(this.timeInSeconds / 60);
			const seconds = Math.floor(this.timeInSeconds % 60);
			const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
			const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
			return `${formattedMinutes}:${formattedSeconds}`;
		}


	},
});

