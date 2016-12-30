import {Component, OnInit, Input} from '@angular/core';
import Hero from "../../structures/Hero";
import {HeroService} from "../../services/hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params["id"]))
			.subscribe(hero => this.hero = hero);
	}

	goBack(): void {
		this.location.back();
	}

}
