"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HeroService_1 = require("../service/HeroService");
var router_1 = require("@angular/router");
var HeroComponent = (function () {
    function HeroComponent(heroServices, router) {
        this.heroServices = heroServices;
        this.router = router;
    }
    HeroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroServices.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroComponent = __decorate([
        core_1.Component({
            selector: "hero",
            templateUrl: "app/template/HeroComponent.html",
            styleUrls: ['app/css/HeroComponent.css'],
            providers: [HeroService_1.HeroService]
        }), 
        __metadata('design:paramtypes', [HeroService_1.HeroService, router_1.Router])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
