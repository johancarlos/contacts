import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NewContact } from './new-contact';

@NgModule({
  declarations: [
    NewContact,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    NewContact
  ]
})
export class NewContactModule {}
