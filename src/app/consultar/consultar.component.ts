import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConectaService } from '../servicios/conecta.service';
import { Alumno } from '../clases/alumno';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'edad','materia','aniocursada','editar'];
  dataSource: any[] = [];

  constructor(private router:Router,private conectaService: ConectaService,private route: ActivatedRoute) { }

  parametro:any;

  ngOnInit(): void {

  this.getAlumnos();
  }


  // este metodo esta en el componente conecta.service.ts
    
  getAlumnos() {
    this.conectaService.getAlumnos().subscribe((alumnos) => {
    //	debugger;
      this.dataSource = alumnos;

      this.parametro = this.route.snapshot.params;

    if (Object.keys(this.parametro).length) {
      this.recibeAlumno(this.parametro);
    }

    });
  }

  recibeAlumno(a1: Alumno) {
      
      this.dataSource.push(a1);
    };


  goToEditar(user) {		
        this.router.navigate(["/inscribir-component",user]);
      }
  

      
}

