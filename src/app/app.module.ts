import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
	AppComponent
  ],
  entryComponents: [],
  exports: [
  ],
  imports: [
	  BrowserModule,
	  FormsModule,
	  IonicModule.forRoot(),
	  AppRoutingModule,
	  IonicStorageModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
