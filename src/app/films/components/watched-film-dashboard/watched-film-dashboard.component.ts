import { Component, OnInit } from "@angular/core";
import { eLocalStorage, Utilities } from "src/app/utils/Utilities";
import { Film } from "../../models/film";

@Component({
    selector: 'app-watched-film-dashboard',
    styleUrls: ['./watched-film-dashboard.component.scss'],
    templateUrl: './watched-film-dashboard.component.html'
})
export class WatchedFilmDashboardComponent implements OnInit {
    watchedFilms: Film[] = [];

    constructor(private _utilities: Utilities) {

    }

    ngOnInit(): void {
        this.watchedFilms = this._utilities.getLocalStorage(eLocalStorage.WatchedFilms);
    }

    changeStatus(event: Film) { }
}