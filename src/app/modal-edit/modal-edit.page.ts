import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AlkemysService } from '../services/alkemys.service';
import { formulario } from '../interfaces/formulario';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.page.html',
  styleUrls: ['./modal-edit.page.scss'],
})
export class ModalEditPage implements OnInit {

  // @Input()  form_concepto:string;
  // @Input()  form_monto:number;
  // @Input()  form_fecha: Date;
  // @Input()  form_id: number;
  @Input() form:formulario;


  constructor(private modalCtrl: ModalController, private serviceAlkemy: AlkemysService,public toastController: ToastController,) { }

  ngOnInit() {
  }



  editar(id:number, formu:formulario){

// console.log(formu);
this.serviceAlkemy.putForm(id,formu).subscribe(data=>{
  // console.log(data);
  this.mostrarMensaje("Formulario Editado");
  this.serviceAlkemy.refreshList();
  this.modalCtrl.dismiss();
});

// setTimeout(() => {
// }, 1500);
  }

  async mostrarMensaje(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 500
    });
    toast.present();
  }



}
