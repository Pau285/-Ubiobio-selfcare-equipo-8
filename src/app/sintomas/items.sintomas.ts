import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ItemsSintomas {
  itemsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection('Seleccion');
  }

  getItems() {
    return this.itemsCollection.valueChanges({idField: 'idField'});
  }

  get() {
    return this.itemsCollection.valueChanges();
  }

  addItems(t: any) {
    this.itemsCollection.add({
      nombre: t
    });
  }

  getSintomasFiltro(filtro: string){
    this.afs.collection('Seleccion', ref=>ref.where('nombre','==', filtro));
  }

  deleteItem(id: string) {
    return this.itemsCollection.doc(id).delete();
  }
}
