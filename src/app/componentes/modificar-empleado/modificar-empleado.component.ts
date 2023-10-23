import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent implements OnInit {
formDeEmpleados:FormGroup;
elID:any;

constructor(
  private activeRoute:ActivatedRoute, 
  private crudService:CrudService, 
  public formulario:FormBuilder,
  private ruteador:Router
  ){
  this.elID=this.activeRoute.snapshot.paramMap.get('id');
  console.log(this.elID);
  this.crudService.ObtenerEmpleado(this.elID).subscribe(
    respuesta=>{
      console.log(respuesta);
      this.formDeEmpleados.setValue({
        nombre:respuesta[0]['nombre'],
        correo:respuesta[0]['correo']
      });
    }
  );
  this.formDeEmpleados=this.formulario.group({
    nombre:[''],
    correo:['']
  });
}

ngOnInit(): void {
  
}

enviarDato():any{
  console.log(this.elID);
  console.log(this.formDeEmpleados.value);
  this.crudService.ModificarEmpleado(this.elID,this.formDeEmpleados.value).subscribe(()=>{
    this.ruteador.navigateByUrl('/listar-empleado');
  });
}


}
