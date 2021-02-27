import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formulario } from '../interfaces/formulario';
import { AsyncSubject, BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlkemysService{

  form: formulario[];
  ingreso: number = 0;
  egreso: number = 0;
  balanceTotal: number = 0;

  
  public mensaje = new Subject<formulario[]>();
  public balance = new Subject<number>();

  constructor(private http:HttpClient) {
    
    
   }


refreshList(){

  this.getAllForms().subscribe(data=>{
    if (data.length >0 ) 
    {
    this.form = data;
    this.mensaje.next(data.sort((a,b)=> a.form_fecha <= b.form_fecha ? 1:-1));
      this.balance.next(this.balanceResult())
    }
    else {
      this.balance.next(0)
    }
    })

  }


  balanceResult(){
    this.ingreso = 0;
    this.egreso = 0;
      this.form.forEach(element => {
        if(element.form_tipo == "ingreso"){
          this.ingreso += element.form_monto;
        }
        else{
          this.egreso +=  element.form_monto;
        }
        
      })
      return this.balanceTotal = this.ingreso- this.egreso;
    
    }
    
    
getAllForms()
{
    return this.http.get<formulario[]>('https://apialkemy.herokuapp.com/formularios');
}

deleteForm(id: number): Observable<boolean>
{
  return this.http.delete<boolean>("https://apialkemy.herokuapp.com/delete/" + id);
}

postForm(form:formulario)
{
  return this.http.post("https://apialkemy.herokuapp.com/formularios/add",form)
}

putForm(id: number, formu:formulario)
{
  
  return this.http.put("https://apialkemy.herokuapp.com/update/" + id,formu);
}


}
