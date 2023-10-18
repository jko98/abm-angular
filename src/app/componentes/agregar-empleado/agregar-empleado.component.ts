import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit{
  formDeEmpleados:FormGroup;

  constructor(public formulario:FormBuilder){
  
   this.formDeEmpleados=this.formulario.group({
    nombre:[''],
    correo:['']
   })

  }

ngOnInit(): void {
  
}


  enviarDato():any{
  console.log("presionado"); 
  console.log(this.formDeEmpleados.value);
  }
}
