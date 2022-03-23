import { Component, OnInit } from '@angular/core';
import { Clientes } from '../modelos/clientes/clientes';

@Component({
  selector: 'app-ingreso-clientes',
  templateUrl: './ingreso-clientes.component.html',
  styleUrls: ['./ingreso-clientes.component.css']
})
export class IngresoClientesComponent implements OnInit {

  public clientes : Array<Clientes>;
  public valores = new Array;
  public valores2 = new Array;

  constructor() {
  
    
    this.clientes = [new Clientes(1,'17253707-3','Abel','Gazmuri','agazmuri@codefly.cl','912345678','226159373'),
                     new Clientes(2,'19039393-3','Valerita','Ponce','vponce@codefly.cl','912345678','226159373'),
                     new Clientes(3,'8338957-5','Cristina','Maldonado','cmaldonado@codefly.cl','912345678','226159373')              
                    ]; 
    this.clientes.values;
                    
    this.valores = [18000, 15000, 25000];  
    

   }

  ngOnInit(): void {

    
    console.log(this.clientes.values);
  }


  
  
}


