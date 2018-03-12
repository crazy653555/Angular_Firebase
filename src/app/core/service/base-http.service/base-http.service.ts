import { Injectable } from '@angular/core';
import { AngularFireDatabase, QueryFn } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ListHandler } from './model/realtime-database/ListHandler';
import { ObjectHandler } from './model/realtime-database/object-handler.model';

export interface BaseHttpConfig {
  isKey: boolean;
  queryFn?: QueryFn;
}

@Injectable()
export class BaseHttpService {

  constructor(private _db: AngularFireDatabase) { }

  listHandler(url: string) {
    return new ListHandler(this._db, url);
  }

  objectHandler(url: string) {
    return new ObjectHandler(this._db, url);
  }
}

