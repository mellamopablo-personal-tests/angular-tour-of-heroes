import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";
import Hero from "../../structures/Hero";
import {Router} from "@angular/router";

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	constructor(
		private heroService: HeroService,
		private router: Router
	) { }

	heroes: Hero[];
	selectedHero: Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	ngOnInit(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes).catch(console.error);
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]).catch(console.error);
	}
}
