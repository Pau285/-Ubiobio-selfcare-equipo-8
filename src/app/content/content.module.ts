import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentPageRoutingModule } from './content-routing.module';

import { ContentPage } from './content.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ContentPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContentPageModule {}
