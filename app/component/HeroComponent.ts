import {Component, OnInit} from '@angular/core';

import {HeroService} from "../service/HeroService";
import {Hero} from "../model/HeroModel";
import {Router} from "@angular/router";

@Component({
    selector: "hero",
    templateUrl: "app/template/HeroComponent.html",
    styleUrls: ['app/css/HeroComponent.css'],
    providers: [HeroService]
})

export class HeroComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroServices: HeroService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.heroServices.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}