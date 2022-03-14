import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatSnackBar, MatTabChangeEvent, MatTabGroup } from "@angular/material";
import { eLocalStorage, Utilities } from "src/app/utils/Utilities";
import { enumSearch } from "../../models/domains/enumSearch";
import { Film } from "../../models/film";
import { OmdApi } from "../../models/OmdApi";
import { FilmService } from "../../service/film.service";

@Component({
  selector: 'app-film-dashboard',
  styleUrls: ['./film-dashboard.component.scss'],
  templateUrl: './film-dashboard.component.html'
})
export class FilmDashboardComponent implements OnInit, AfterViewInit {

  @ViewChild("tabref", { static: false }) tabref: MatTabGroup;

  WatchedFilms: Film[] = [];
  WishedFilms: Film[] = [];

  movies: Film[] = [];
  series: Film[] = [];
  episodies: Film[] = [];

  TextSearch: string = '';
  selectedIndex: number;

  constructor(private filmService: FilmService, private _utilities: Utilities, private _snackBar: MatSnackBar) { }

  ngAfterViewInit(): void {
    this.checkSearchItem();
  }

  ngOnInit() {
  }

  tabSelectedTabChange(changeEvent: MatTabChangeEvent) {
    this._utilities.setLocalStorage(eLocalStorage.TabSelected, changeEvent.index);

    this.checkSearchItem();
  }

  checkSearchItem() {
    setTimeout(() => {
      this.TextSearch = this._utilities.getLocalStorage(eLocalStorage.TextSearchMovie);
      this.selectedIndex = this._utilities.getLocalStorage(eLocalStorage.TabSelected);

      if (this.TextSearch && this.TextSearch !== '') {
        this.Search(this.selectedIndex);
      }

      this.WatchedFilms = this._utilities.getLocalStorage(eLocalStorage.WatchedFilms);
      this.WatchedFilms = this.WatchedFilms ? this.WatchedFilms : [];
      this.WishedFilms = this._utilities.getLocalStorage(eLocalStorage.WishFilms);
      this.WishedFilms = this.WishedFilms ? this.WishedFilms : [];
    });
  }

  changeWatched(event: Film) {
    event.watched = !event.watched;

    if (event.watched) {
      this.WatchedFilms.push(event);
      this.showSnackBarSucess();
    }
    else {
      var index = this.WatchedFilms.findIndex(m => m.imdbID == event.imdbID);
      this.WatchedFilms.splice(index, 1);
    }

    this._utilities.setLocalStorage(eLocalStorage.WatchedFilms, this.WatchedFilms);
  }

  changeWished(event: Film) {
    event.wished = !event.wished;

    if (event.wished) {
      this.WishedFilms.push(event);
      this.showSnackBarSucess();
    }
    else {
      var index = this.WishedFilms.findIndex(m => m.imdbID == event.imdbID);
      this.WishedFilms.splice(index, 1);
    }

    this._utilities.setLocalStorage(eLocalStorage.WishFilms, this.WishedFilms);
  }

  showSnackBarSucess() {
    this._snackBar.open('Done', '', {
      duration: 3000
    });
  }

  Search(indexSearch: number) {

    this._utilities.setLocalStorage(eLocalStorage.TextSearchMovie, this.TextSearch);
    this._utilities.setLocalStorage(eLocalStorage.TabSelected, this.tabref.selectedIndex);

    this.filmService.getMovies(this.TextSearch, indexSearch).subscribe((data: OmdApi) => {

      if (data.Response === 'False') {
        return;
      }

      switch (indexSearch) {
        case enumSearch.Movie:
          this.movies = this.setResult(data);
          break;
        case enumSearch.Serie:
          this.series = this.setResult(data);
          break;
        case enumSearch.Episode:
          this.episodies = this.setResult(data);
          break;
        default:
          break;
      }
    });
  }

  setResult(data: OmdApi) {

    return data.Search.map<Film>(item => <Film>{
      imdbID: item.imdbID,
      poster: item.Poster,
      title: item.Title,
      year: item.Year,
      type: item.Type,
      watched: this.WatchedFilms.some(m => m.imdbID === item.imdbID),
      wished: this.WishedFilms.some(m => m.imdbID === item.imdbID)
    });
  }
}