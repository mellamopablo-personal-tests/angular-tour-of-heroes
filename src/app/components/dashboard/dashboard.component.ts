import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../services/hero.service";
import Hero from "../../structures/Hero";

@Component({
	//moduleId: module.id,
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	heroes: Hero[];

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => heroes.slice(1, 5))
			.then(heroes => this.heroes = heroes)
			.catch(console.error);
	}

}
