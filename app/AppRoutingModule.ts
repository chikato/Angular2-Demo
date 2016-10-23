import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./component/DashboardComponent";
import {HeroComponent} from "./component/HeroComponent";
import {HeroDetailComponent} from "./component/HeroDetailComponent";

const routes: Routes = [
    {path: "", redirectTo: "/dashboard", pathMatch: "full"},
    {path: "dashboard", component: DashboardComponent },
    {path: "heroes", component: HeroComponent},
    {path: "detail/:id", component: HeroDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}