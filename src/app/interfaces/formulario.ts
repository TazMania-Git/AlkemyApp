export interface formulario{
    form_concepto:string,
    form_monto:number,
    form_fecha: Date,
    form_tipo:string,
    form_id:number
}

export class formulario{

    form_concepto:string;
    form_monto:number;
    form_fecha: Date;
    form_tipo:string;
    form_id:number;

constructor(datos?:formulario){
if(datos != null){
    this.form_concepto = datos.form_concepto;
    this.form_monto = datos.form_monto;
    this.form_fecha = datos.form_fecha;
    this.form_tipo = datos.form_tipo;
    this.form_id = datos.form_id;
    return;
}
this.form_concepto = this.form_concepto;
this.form_monto = this.form_monto;
this.form_fecha = this.form_fecha;
this.form_tipo = this.form_tipo;
this.form_id = this.form_id;

}
}