import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  user: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getOne(userId: number): Observable<User> {
    return this.http.get<User>(`/users/${userId}`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`/users`);
  }
}
