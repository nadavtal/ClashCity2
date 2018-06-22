import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unit } from './shared/unit';
import { GrUNITS } from './shared/units';
import { AiUNITS } from './shared/units';
import { TowUNITS } from './shared/units';
import { SpeUNITS } from './shared/units';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  } 

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getGrUnits(): Unit[] {
    return GrUNITS;
  }

  getAiUnits(): Unit[] {
    return AiUNITS;
  }

  getSpeUnits(): Unit[] {
    return SpeUNITS;
  }

  getTowUnits(): Unit[] {
    return TowUNITS;
  }
  
}
