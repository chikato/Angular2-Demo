// import './service/rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "./AppRoutingModule";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import {AppComponent} from './component/AppComponent';
import {HeroComponent} from './component/HeroComponent';
import {HeroDetailComponent} from './component/HeroDetailComponent';
import {DashboardComponent} from "./component/DashboardComponent";
import {HeroService} from "./service/HeroService";
import {HeroSearchComponent} from "./component/HeroSearchComponent";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],

    declarations: [
        AppComponent,
        DashboardComponent,
        HeroComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],

    providers: [HeroService],

    bootstrap: [AppComponent]
})

export class AppModule {
}