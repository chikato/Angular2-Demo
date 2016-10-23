import {Component, OnInit} from '@angular/core';
import {Hero} from "../model/HeroModel";
import {HeroService} from "../service/HeroService";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "dashboard",
    templateUrl: "../template/DashboardComponent.html",
    styleUrls: ["../css/DashboardComponent.css"]
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}