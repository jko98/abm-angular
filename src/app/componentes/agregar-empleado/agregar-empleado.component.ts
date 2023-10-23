import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder} from '@angular/forms';
// import { from } from 'rxjs';
import { CrudService } from 'src/app/service/crud.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit{
  formDeEmpleados:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ){
  
   this.formDeEmpleados=this.formulario.group({
    nombre:[''],
    correo:['']
   });

  }

ngOnInit(): void {
  
}


  enviarDato():any{
  console.log("presionado"); 
  console.log(this.formDeEmpleados.value);
  this.crudService.AgregarEmpleado(this.formDeEmpleados.value).subscribe(respuesta=>{
    this.ruteador.navigateByUrl('/listar-empleado');
  });

  
  }
}
