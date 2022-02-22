import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')));   // localStorage, per uscire solamente se si clicca su LOGOUT
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

//    login(username, password) {
//        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
//            .pipe(map(user => {
//                // store user details and jwt token in local storage to keep user logged in between page refreshes
//                sessionStorage.setItem('currentUser', JSON.stringify(user));  // localStorage, per uscire solamente se si clicca su LOGOUT
//                this.currentUserSubject.next(user);
//                return user;
//            }));
//    }

	login(password) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('currentUser', JSON.stringify(user));  // localStorage, per uscire solamente se si clicca su LOGOUT
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        sessionStorage.removeItem('currentUser');  // localStorage, per uscire solamente se si clicca su LOGOUT
        this.currentUserSubject.next(null);
    }
}