import {Injectable} from '@angular/core';

import {Hero} from "../model/HeroModel";
import {HEROES} from "../model/HeroData";

@Injectable()

export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}