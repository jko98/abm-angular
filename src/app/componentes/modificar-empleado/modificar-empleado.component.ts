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

elID:any;

constructor(private activeRoute:ActivatedRoute, private crudService:CrudService){
  this.elID=this.activeRoute.snapshot.paramMap.get('id');
  console.log(this.elID);
  this.crudService.ObtenerEmpleado(this.elID).subscribe(
    respuesta=>{
      console.log(respuesta);
    }
  );
}

ngOnInit(): void {
  
}


}
