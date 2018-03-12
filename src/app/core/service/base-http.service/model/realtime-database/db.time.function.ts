import * as firebase from "firebase";

export function dbTimeObject(obj: any, isNew = true) {
  const newObj = {
    ...obj,
    updateAt: firebase.database.ServerValue.TIMESTAMP
  };

  if (isNaN) {
    newObj.createAt = firebase.database.ServerValue.TIMESTAMP;
  }
  return newObj;
}
