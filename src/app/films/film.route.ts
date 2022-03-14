import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilmDashboardComponent } from "./components/film-dashboard/film-dashboard.component";
import { FilmAppComponent } from "./film.app.component";

const movieRouterConfig: Routes = [
    {
        path: '', component: FilmAppComponent,
        children: [
            { path: '', redirectTo: 'all' },
            {
                path:
                    ':estado',
                component: FilmDashboardComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(movieRouterConfig)
    ],
    exports: [RouterModule]
})
export class FilmRoutingModule { }