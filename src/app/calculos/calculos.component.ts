import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styleUrls: ['./calculos.component.css']
})
export class CalculosComponent implements OnInit {

estadio;
proteinuria;
checkoutForm;
resultado;


  constructor(
    private formBuilder: FormBuilder,
    private router:Router
  ) { 
    this.checkoutForm = this.formBuilder.group({




    });
  }

  ngOnInit() {
  }

onSubmit(customerData) {
  console.log ( customerData);
}



 compara(){

if ( 90<this.estadio &&  this.proteinuria<30){
  this.resultado = "ALTA";
} else if (60< this.estadio || this.estadio >89  &&  this.proteinuria<30 ){
  this.resultado = "ANUAL";
}
else if (30< this.estadio || this.estadio >59  &&  this.proteinuria<30 ){
  this.resultado = "SEMESTRAL";
}
else if (15< this.estadio || this.estadio >29  &&  this.proteinuria<30 ){
  this.resultado = "TRIMESTRAL";
}
else if (15>this.estadio &&  this.proteinuria<30 ){
  this.resultado = "MESUAL";
}
else if (90<= this.estadio || this.estadio >=30   &&  this.proteinuria>=30 || this.proteinuria<=299  ){
  this.resultado = "SEMESTRAL";
}
else if (15< this.estadio || this.estadio <=29  &&  this.proteinuria>=30 || this.proteinuria<=299  ){
  this.resultado = "TRIMESTRAL";
}
else if (15> this.estadio  &&  this.proteinuria>=30 || this.proteinuria<=299  ){
  this.resultado = "MENSUAL";
}
else if (90<= this.estadio || this.estadio >=15  &&  this.proteinuria>=300){
  this.resultado = "TRIMESTRAL";
}

else if (15>this.estadio &&  this.proteinuria>=300 ){
  this.resultado = "MESUAL";
}

else if (90<= this.estadio || this.estadio >=15  &&  this.proteinuria>=300){
  this.resultado = "TRIMESTRAL";
}

 else {console.log ("datos fuera de rango ¡¡¡ Introduzca datos correctos")}
}

};

