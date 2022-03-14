import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule, MatTabsModule } from "@angular/material";
import { Utilities } from "src/app/utils/Utilities";
import { FilmDetailComponent } from "./components/film-card-detail/film-card-detail.component";
import { FilmDashboardComponent } from "./components/film-dashboard/film-dashboard.component";
import { WatchedFilmDashboardComponent } from "./components/watched-film-dashboard/watched-film-dashboard.component";
import { WishFilmDashboardComponent } from "./components/wish-film-dashboard/wish-film-dashboard.component";
import { FilmAppComponent } from "./film.app.component";
import { FilmRoutingModule } from "./film.route";
import { FilmService } from "./service/film.service";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FilmRoutingModule,
        FormsModule,
        MatTabsModule,
        MatSnackBarModule
    ],
    providers: [
        FilmService,
        Utilities
    ],
    declarations: [
        FilmAppComponent,
        FilmDashboardComponent,
        FilmDetailComponent,
        WatchedFilmDashboardComponent,
        WishFilmDashboardComponent
    ],
    exports: []
})
export class FilmModule { }