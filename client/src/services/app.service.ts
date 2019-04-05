import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class Service {

    constructor(private http: HttpClient) { }

    url = 'localhost:3000';

    getDogs(): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/dogs`);
    }

    getDog(dogId): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/dogs/${dogId}`);
    }

    getTrophiesByDog(dogId): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/dogs/${dogId}/trophies`);
    }

    getRatesByDog(dogId): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/rates/avg/${dogId}`);
    }

    getBestRates(): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/rates/best`);
    }

    getReviewsByDog(dogId): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/reviews/dogs/${dogId}`);
    }

}