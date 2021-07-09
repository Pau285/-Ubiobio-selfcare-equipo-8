import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection('Sintomas');
  }

  getItems() {
    return this.itemsCollection.valueChanges();
  }

  addItem(t: any) {
    this.itemsCollection.add({
      nombre: t
    });
  }

  getSintomasFiltro(filtro: string){
    this.afs.collection('Sintomas', ref=>ref.where('nombre','==', filtro));
  }
}
