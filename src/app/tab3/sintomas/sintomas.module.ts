import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SintomasPage } from './sintomas.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

import { SintomasPageRoutingModule } from './sintomas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SintomasPageRoutingModule,
  ],
  declarations: [SintomasPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SintomasPageModule {}
