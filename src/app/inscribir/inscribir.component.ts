import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../clases/alumno';

@Component({
	selector: 'app-inscribir',
	templateUrl: './inscribir.component.html',
	styleUrls: [ './inscribir.component.css' ]
})
export class InscribirComponent implements OnInit {
	constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {}
	// mate: Materia[] = [
	//   {value: 'Logica', viewValue: 'Logica'},
	//   {value: 'Marketing', viewValue: 'Marketing'},
	//   {value: 'Proyectos', viewValue: 'Proyectos'}
	// ];

	inscripcionForm: FormGroup;
	parametro: any;
	alumno: Alumno;
	ngOnInit(): void {
		this.parametro = this.route.snapshot.params;

		if (Object.keys(this.parametro).length) {
			this.alumno = this.parametro;
		}

		this.initForm(this.alumno);
	}

	initForm(elemento: Alumno) {
		this.inscripcionForm = this.fb.group({
			nombre: [ elemento ? elemento.nombre : '', Validators.required ],
			apellido: [ elemento ? elemento.apellido : '' ],
			edad: [ elemento ? elemento.edad : '' ],

			materia: [ elemento ? elemento.materia : '' ],
			aniocursada: [ elemento ? elemento.aniocursada : '' ]
		});
	}

	// submit(){

	// }

	cargarDatos() {
		let alum: Alumno = this.inscripcionForm.value;
		this.router.navigate([ 'consultar-component', alum ]);
	}
}
