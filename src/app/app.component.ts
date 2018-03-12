import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseHttpService } from '@core/service/base-http.service/base-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  item1: Observable<any[]>;
  item2: Observable<any>;
  item3: Observable<any[]>;

  constructor(private _http: BaseHttpService) {
    this.item1 = this._http.listHandler('numbers').get( {
      queryFn: (ref) => ref.orderByChild('value').endAt(3).limitToLast(2),
      isKey: true
    });

    this.item2 = this._http.objectHandler('numbers').get();
  }

}
