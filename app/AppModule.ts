import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './component/AppComponent';
import {HeroComponent} from './component/HeroComponent';
import {HeroDetailComponent} from './component/HeroDetailComponent';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HeroComponent, HeroDetailComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}