import { Component, OnInit } from "@angular/core";
import { eLocalStorage, Utilities } from "src/app/utils/Utilities";
import { Film } from "../../models/film";

@Component({
    selector: 'app-wish-film-dashboard',
    styleUrls: ['./wish-film-dashboard.component.scss'],
    templateUrl: './wish-film-dashboard.component.html'
})
export class WishFilmDashboardComponent implements OnInit {
    wishFilms: Film[] = [];

    constructor(private _utilities: Utilities) {

    }

    ngOnInit(): void {
        this.wishFilms = this._utilities.getLocalStorage(eLocalStorage.WishFilms);
    }

    changeStatus(event: Film) { }
}