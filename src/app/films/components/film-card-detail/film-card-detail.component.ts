import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Film } from "../../models/film";

@Component({
    selector: 'film-card-detail',
    styleUrls: ['./film-card-detail.component.scss'],
    templateUrl: './film-card-detail.component.html'
})
export class FilmDetailComponent {
    @Input() film: Film;
    @Input() onlyDisplay: boolean;

    @Output() watched: EventEmitter<any> = new EventEmitter();
    @Output() wished: EventEmitter<any> = new EventEmitter();

    WatchedEventEmitter() {
        this.watched.emit(this.film);
    }

    WishedEventEmitter() {
        this.wished.emit(this.film);
    }
}