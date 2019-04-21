import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject(null);
  serviceData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: any) {
    this.dataSource.next(data);
  }

}
