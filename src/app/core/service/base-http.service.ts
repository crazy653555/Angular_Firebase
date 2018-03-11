import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface BaseHttpConfig {
  isKey: boolean;
}

@Injectable()
export class BaseHttpService {

  constructor(private _db: AngularFireDatabase) { }

  // get Object
  object<T>(url: string, config: BaseHttpConfig = { isKey: true }): Observable<T> | Observable<any> {
    const req = this._db.object(url);
    return config.isKey ?
      req.snapshotChanges().map(action => ({ key: action.key, ...action.payload.val() })) :
      req.valueChanges();
  }

  // get json
  list<T>(url: string, config: BaseHttpConfig = { isKey: true }): Observable<T> | Observable<any> {
    const req = this._db.list(url);
    return config.isKey ?
      req.snapshotChanges().map(actions => actions.map(action => ({ key: action.key, ...action.payload.val() }))) :
      req.valueChanges();
  }

  getList<T>(url: string): Observable<T> | Observable<any> {
    return this._db.list(url).snapshotChanges();
  }
}

