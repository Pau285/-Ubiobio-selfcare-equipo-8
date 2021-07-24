
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ItemsSintomas } from 'src/app/sintomas/items.sintomas';


@Component({
  selector: 'app-sintomas3',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})
export class SintomasPage implements OnInit {
  data: any;

  items: Observable<any[]>;

  opcionSeleccionado: string;
  opcion: string;
  filterTerm: string;


  constructor(private rte: ActivatedRoute, public alert: AlertController,private iSintomas: ItemsSintomas) {
    this.rte.queryParams.subscribe(params => {
      if (params && params.param) {
        this.data = params.param;

      }
    });
  }


  ngOnInit() {
    this.iSintomas.get().subscribe( res => {
      console.log('my items', res);
    });

    this.items = this.iSintomas.get();

  }
  deleteItem(id) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.iSintomas.deleteItem(id);
    }
  }

}
