import { Injectable } from '@angular/core';
import Hero from "../structures/Hero";

@Injectable()
export class HeroService {

	//noinspection JSMethodCanBeStatic
	getHeroes(): Promise<Hero[]> {
		return new Promise((fulfill, reject) => {
			return fulfill([
				{ id: 11, name: 'Mr. Nice' },
				{ id: 12, name: 'Narco' },
				{ id: 13, name: 'Bombasto' },
				{ id: 14, name: 'Celeritas' },
				{ id: 15, name: 'Magneta' },
				{ id: 16, name: 'RubberMan' },
				{ id: 17, name: 'Dynama' },
				{ id: 18, name: 'Dr IQ' },
				{ id: 19, name: 'Magma' },
				{ id: 20, name: 'Tornado' }
			]);
		});
	}

	getHero(id: number): Promise<Hero> {
		return new Promise((fulfill, reject) => {
			this.getHeroes().then(heroes => {
				let hero = heroes.find(e => e.id === id);

				if (hero) {
					fulfill(hero);
				} else {
					reject(new Error(`Hero #${id} doesn't exist.`));
				}
			})
		});
	}

}
