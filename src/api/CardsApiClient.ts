import type {CardDb} from "@/models/CardDb";

export class CardsApiClient {
	async getCards(): Promise<CardDb[]> {
		try {
			const response = await fetch('./src/data/cards.json');
			
			if (!response.ok) {
				console.error(`Ошибка сети: ${response.status}`);
				return [];
			}
			return await response.json();
			
		} catch (error) {
			console.error('Ошибка загрузки данных:', error);
			return [];
		}
	}
}

