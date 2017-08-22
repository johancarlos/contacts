import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { NewContact } from '../../components/new-contact/new-contact';


@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.items = db.list('/Contactos');
  }

  newContact(){
    this.navCtrl.push(NewContact);
  }
}
