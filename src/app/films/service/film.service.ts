import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { enumSearch } from "../models/domains/enumSearch";
import { OmdApi } from "../models/OmdApi";

@Injectable()
export class FilmService {

    constructor(private http: HttpClient) { }

    getMovies(name: string, type: number): Observable<OmdApi> {
        var typeName = 'movie';

        switch (type) {
            case enumSearch.Movie:
                typeName = 'movie'
                break;
            case enumSearch.Serie:
                typeName = 'series'
                break;
            case enumSearch.Episode:
                typeName = 'episode'
                break;
            default:
                break;
        }

        return this.http.get<OmdApi>(`http://www.omdbapi.com/?s=${name}&Type=${typeName}&apikey=7e4041b4`);
    }
}

