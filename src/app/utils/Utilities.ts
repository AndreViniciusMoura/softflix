import { Injectable } from "@angular/core";

@Injectable()
export class Utilities {

    setLocalStorage(elocalstorage: eLocalStorage, value: any) {
        localStorage.setItem(eLocalStorage[elocalstorage].toString(), JSON.stringify(value));
    }

    getLocalStorage(elocalstorage: eLocalStorage): any {
        return JSON.parse(localStorage.getItem(eLocalStorage[elocalstorage].toString()));
    }
}

export enum eLocalStorage {
    TextSearchMovie,
    WatchedFilms,
    WishFilms,
    SeriesStorage,
    EpsodiesStorage,
    TabSelected
}