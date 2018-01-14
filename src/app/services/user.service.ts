import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;

  constructor(public afs: AngularFirestore) { }

}
interface User{
  id?: string;
  name?: string;
  email?: string;
  password?:string;
}