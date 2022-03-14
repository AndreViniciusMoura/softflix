import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { enumSearch } from "../models/domains/enumSearch";
import { OmdApi } from "../models/OmdApi";

@Injectable()
export class FilmService {

    constructor(private http: HttpClient) { }

    private setParamType(type: number) {
        switch (type) {
            case enumSearch.Movie:
                return 'movie';
            case enumSearch.Serie:
                return 'series';
            case enumSearch.Episode:
                return 'episode';
            default:
                return 'movie';
        }
    }

    getMovies(name: string, type: number): Observable<OmdApi> {
        var typeName = this.setParamType(type);

        return this.http.get<OmdApi>(`http://www.omdbapi.com/?s=${name}&Type=${typeName}&apikey=7e4041b4`);
    }
}

