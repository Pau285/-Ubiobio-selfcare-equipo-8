import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ItemsService } from '../services/items.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
  data: any;

  items: Observable<any[]>;

  opcionSeleccionado: string;
  opcion: string;
  filterTerm: string;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.param) {
        this.data = params.param;

        this.itemsService.addItem(this.data);
      }
    });
  }


  ngOnInit() {
    this.itemsService.getItems().subscribe( res => {
      console.log('my items', res);
    });

    this.items = this.itemsService.getItems();

  }
  checkValue(opcionSeleccionado){
     this.opcion = opcionSeleccionado.detail.value;
     console.log(this.opcion);
  }

}
