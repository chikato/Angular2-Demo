import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Hero} from "../model/HeroModel";

@Injectable()
export class HeroSearchService {
    constructor(private http: Http) {}

    search(name: string): Observable<Hero[]> {
        return this.http
            .get(`app/heroes/?name=${name}`)
            .map((r: Response) => r.json().data as Hero[]);
    }
}