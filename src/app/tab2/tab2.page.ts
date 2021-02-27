import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { formulario } from '../interfaces/formulario';
import { AlkemysService } from '../services/alkemys.service';
import { ModalEditPage } from '../modal-edit/modal-edit.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  forms: formulario[];
  constructor(public serviceAlkemy: AlkemysService,public modalController: ModalController) {}


ngOnInit(){

  this.serviceAlkemy.refreshList();
this.serviceAlkemy.mensaje.subscribe(x=>{
  this.forms = x;
});

  // this.getAllFormularios();


}

getAllFormularios(){

  this.serviceAlkemy.getAllForms().subscribe(f=>{
    this.forms=f;
  })

}

async deleteForm(item:number, i:number){

  // console.log(item, i);
   this.forms.splice(i,1);
  this.serviceAlkemy.deleteForm(item).subscribe(()=>{
  this.serviceAlkemy.refreshList();
  },
  error=>{
    console.log(error)
  }
  );
  };

  doRefresh(event){
    setTimeout(() => {
      this.serviceAlkemy.refreshList();
      // this.getAllFormularios();
      event.target.complete();
    }, 1500);

    }


    async presentModal(form:formulario) {
      const modal = await this.modalController.create({
        component: ModalEditPage,
         componentProps:{
           form:form,
         }
      });
      await modal.present();
      const {data} = await modal.onWillDismiss();

    }


}
