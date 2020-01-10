import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewItemPageRoutingModule } from './view-item-routing.module';
import { ItemDetailComponent } from '../../components/item-detail/item-detail.component';
import { ViewItemPage } from './view-item.page';

@NgModule({
  declarations: [
	ViewItemPage,
	ItemDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewItemPageRoutingModule
  ],
  exports: [
	ItemDetailComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ViewItemPageModule {}
