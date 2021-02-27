import { Component, OnInit, Pipe } from '@angular/core';
import { AlkemysService } from '../services/alkemys.service';
import { formulario } from '../interfaces/formulario';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  form: formulario[];
  ingreso: number = 0;
  egreso: number = 0;
  balanceTotal: number = 0;

  constructor(public serviceAlkemy: AlkemysService) {

  }


ngOnInit(){

this.serviceAlkemy.refreshList();
this.serviceAlkemy.mensaje.subscribe(x=>{
  this.form = x;
});
this.serviceAlkemy.balance.subscribe(x=>{
  this.balanceTotal = x;
});

}

getAllFormularios(){
  this.serviceAlkemy.getAllForms().subscribe(formu=>{
    this.form = formu;
    this.balanceResult();
  })


}

balanceResult(){
this.form.forEach(element => {
  if(element.form_tipo == "ingreso"){
    this.ingreso += element.form_monto;
  }
  else{
    this.egreso +=  element.form_monto;
  }
  
})
this.balanceTotal = this.ingreso- this.egreso;


}

doRefresh(event){
  setTimeout(() => {
    this.serviceAlkemy.refreshList();
    // this.getAllFormularios();
    // this.ingreso = 0;
    // this.egreso = 0;
    event.target.complete();
  
  }, 1500);
  
  }

}