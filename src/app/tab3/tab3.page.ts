import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AlkemysService } from '../services/alkemys.service';
import { formulario } from '../interfaces/formulario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

formus: formulario = new formulario();

usuario = 
{
  concepto : '',
  monto : '',
  fecha : '',
  tipo : ''
}


statelist=[{
  state_id:1,
  state_name:'Ingreso'
},
{
  state_id:2,
  state_name:'Egreso'
}]

isEditable:boolean;

constructor(private serviceAlkemy: AlkemysService,
            public loadingController: LoadingController,
            public toastController: ToastController,
            ) {}

ngOnInit(){


}

  async guardar()
  {
    const loading = await this.loadingController.create({
      message: 'Guardando Formulario',
    });
    await loading.present();

    this.serviceAlkemy.postForm(this.formus).subscribe(()=>{
      this.formus = new formulario(null);
      this.serviceAlkemy.refreshList();
      this.mostrarMensaje("Formulario Guardado");
      loading.dismiss();
     
    },
    error=>{
      this.mostrarMensaje("Ocurrio un error al guardar")
      console.log(error);
      loading.dismiss();
    })
  }

  async mostrarMensaje(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();
  }

}
