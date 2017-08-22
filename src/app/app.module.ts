import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FormsModule } from '@angular/forms';

import { ContactsPage } from '../pages/contacts/contacts';
import { CategoriesPage } from '../pages/categories/categories';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { NewContact } from '../components/new-contact/new-contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAcasCvn7QAntEni74rczESzb9wE3uCL9M",
    authDomain: "agenda-90f7c.firebaseapp.com",
    databaseURL: "https://agenda-90f7c.firebaseio.com",
    projectId: "agenda-90f7c",
    storageBucket: "agenda-90f7c.appspot.com",
    messagingSenderId: "1027729714383"
  }
};


@NgModule({
  declarations: [
    MyApp,
    ContactsPage,
    CategoriesPage,
    AboutPage,
    NewContact,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactsPage,
    CategoriesPage,
    AboutPage,
    NewContact,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
