import {
  _getAngularFireDatabase,
  AngularFireObject,
  AngularFireDatabase
} from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { dbTimeObject } from "./db.time.function";

export class ObjectHandler {
  url: string;
  _fireObject: AngularFireObject<{}>;

  constructor(private _db: AngularFireDatabase, private _url) {
    this.url = _url;
    this._fireObject = this._db.object(_url);
  }

  //get date
  get(isKey = true) {
    return isKey
      ? this._fireObject
          .snapshotChanges()
          .map(action => ({ key: action.key, ...action.payload.val() }))
      : this._fireObject.valueChanges();
  }

  //delete
  delete(): Observable<any> {
    return Observable.fromPromise(this._fireObject.remove());
  }

  //update
  update<T>(data: T) {
    return Observable.fromPromise(
      this._fireObject.update(dbTimeObject(data, false))
    );
  }

  //set
  set<T>(data: T) {
    return Observable.fromPromise(
      this._fireObject.set(dbTimeObject(data, false))
    );
  }
}
