import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  items: Observable<any[]>;
  constructor(private _db: AngularFireDatabase) { }
  ngOnInit(): void {
    this.items = this._db.list('item').valueChanges();  }

}
