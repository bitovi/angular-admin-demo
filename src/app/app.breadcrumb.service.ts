import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable()
export class AppBreadcrumbService {
  private itemsSource = new Subject<MenuItem[]>();

  itemsHandler: Observable<MenuItem[]>;

  constructor() {
    this.itemsHandler = this.itemsSource.asObservable();
  }

  setItems(items: MenuItem[]) {
    this.itemsSource.next(items);
  }
}
