import {Component, OnInit} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {HeroSearchService} from "../service/HeroSearchService";
import {Hero} from "../model/HeroModel";
import {Router} from "@angular/router";

@Component({
    selector: "hero-search",
    templateUrl: "app/template/HeroSearchComponent.html",
    styleUrls: ["app/template/HeroSearchComponent.css"]
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        // this.heroes
    }
}