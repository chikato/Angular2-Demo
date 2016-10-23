import {Injectable} from '@angular/core';

import {Hero} from "../model/HeroModel";
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class HeroService {

    private heroUrl:string = "app/heroes";

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        // return Promise.resolve(HEROES);
        return this.http.get(this.heroUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000)).then(() => this.getHeroes());
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}