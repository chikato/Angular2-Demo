import {Component, Input} from '@angular/core';

import {Hero} from "../model/HeroModel";

@Component({
    selector: "hero-detail",
    templateUrl: "app/template/HeroDetailComponent.html"
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}

