import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';
import { TipoCliente } from 'src/app/models/tipo_clientes';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  //propiedades
  clientes:Clientes[] = [];
  cliente = new Clientes();
  tipos:TipoCliente[] = [];


  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data.map(doc => {
        return{
          ...doc.payload.doc.data() as Clientes,
          id:doc.payload.doc.id
        };
      })
    });
  }
  //metodo para insertar un nuevo libro
  insertarCliente(){
    this.clientesService.insertarClientes(this.cliente);
    this.cliente = new Clientes();
  }

  //metodo para seleccionar un libro y que se asigne a la propiedad libro
  selectCliente(libroSeleccionado:Clientes){
    this.cliente = libroSeleccionado;
  }

  //metodo para actualizar un libro
  updateCliente(){
    this.clientesService.updateClientes(this.cliente);
    this.cliente = new Clientes();
  }

  //metodo para eliminar un libro
  deleteCliente(id:string){
    this.clientesService.deleteClientes(id);
    this.cliente = new Clientes;
  }
}
