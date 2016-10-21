import {Component, OnInit} from '@angular/core';

import {HeroService} from "../service/HeroService";
import {Hero} from "../model/HeroModel";

@Component({
    selector: "hero",
    templateUrl: "app/template/HeroComponent.html",
    styleUrls: ['app/css/HeroComponent.css'],
    providers: [HeroService]
})

export class HeroComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroServices: HeroService) {
    }

    ngOnInit(): void {
        this.heroServices.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}