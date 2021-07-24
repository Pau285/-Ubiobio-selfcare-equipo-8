
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ItemsService } from '../services/items.service';
import { ItemsSintomas } from '../sintomas/items.sintomas';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  data: any;

  items: Observable<any[]>;

  opcionSeleccionado: string;
  opcion: string;
  filterTerm: string;
  nav: NavController;


  constructor(private r: ActivatedRoute,private w: Router, private iS: ItemsService, public a: AlertController,private si: ItemsSintomas) {
    this.r.queryParams.subscribe(params => {
      if (params && params.param) {
        this.data = params.param;

        this.iS.addItem(this.data);
      }
    });
  }


  ngOnInit() {
    this.iS.getItems().subscribe( res => {
      console.log('my items', res);
    });

    this.items = this.iS.getItems();

  }
  checkValue(opcionSeleccionado){
     this.opcion = opcionSeleccionado.detail.value;
     console.log(this.opcion);
  }

  recibir(x){
    console.log(x.nombre,x.selected, x.idField);
      this.si.addItems(x);
  }

  nextPage(){
    this.w.navigate(['/sintomasGuardados']);
  }

  async presentAlert() {
    const alert = await this.a.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      subHeader: 'Síntomas Guardados con éxito',
      buttons: [{
        text: 'Continuar',
        handler: () => {
          this.nextPage();
        }}]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
