import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the NewContact component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'new-contact',
  templateUrl: 'new-contact.html'
})
export class NewContact {

  //text: string;
  contacto:any = {};
  /*contacto: any = {
    nombre:'qwe',
    apellido: 'asdfg',
    telefono: '12123',
    email: 'asdad@qwe.com',
    fecnac: '23/10/1995',
    genero: 'M'
  };
  */

  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController,
 db: AngularFireDatabase) {
    this.items = db.list('/Contactos');
  }
  guardar(){
    this.items.push(this.contacto);
    this.viewCtrl.dismiss();
  }

}
