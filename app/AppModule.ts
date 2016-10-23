import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './component/AppComponent';
import {HeroComponent} from './component/HeroComponent';
import {HeroDetailComponent} from './component/HeroDetailComponent';
import {DashboardComponent} from "./component/DashboardComponent";
import {HeroService} from "./service/HeroService";
import {AppRoutingModule} from "./AppRoutingModule";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api/in-memory-web-api.module";
import {InMemoryDataService} from "./service/in-memory-data.service";

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
        HeroDetailComponent
    ],

    providers: [HeroService],

    bootstrap: [AppComponent]
})

export class AppModule {
}