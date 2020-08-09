import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getTests () {
    return [
      {"id" : 1, "name" : "Victor"},
      {"id" : 2, "name" : "Pavel"}
    ];
  }
}
