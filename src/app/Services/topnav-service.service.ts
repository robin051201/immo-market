import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class TopnavService {

  private isAdmin: Subject<any> = new Subject<any>();
  sharedData$: Observable<any> = this.isAdmin.asObservable();

  constructor() { }

  setData(isAdmin: boolean) {
    this.isAdmin.next(isAdmin);
  }
}
