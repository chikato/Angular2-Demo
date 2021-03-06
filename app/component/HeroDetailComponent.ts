import {Component, OnInit} from '@angular/core';

import {Hero} from "../model/HeroModel";
import {HeroService} from "../service/HeroService";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector: "hero-detail",
    templateUrl: "app/template/HeroDetailComponent.html",
    styleUrls: ['app/css/HeroDetailComponent.css'],
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params["id"];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}

