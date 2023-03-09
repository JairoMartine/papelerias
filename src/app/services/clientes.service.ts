import { Injectable } from '@angular/core';

import{AngularFirestore} from '@angular/fire/compat/firestore';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private firestore:AngularFirestore) { }

  //metodo que permite tener todos los doc de la colección
  getClientes(){
    return this.firestore.collection('clientes').snapshotChanges();
  }

  //método para insertar un documento en la colección
  insertarClientes(clientes:Clientes){
    return this.firestore.collection('clientes').add(Object.assign({},clientes));
  }

  //método para actualizar un doc existente
  updateClientes(clientes:Clientes){
    return this.firestore.doc('clientes/'+clientes.id).update(clientes);
  }

  deleteClientes(id:string){
    return this.firestore.doc('clientes/'+id).delete();
  }
}
