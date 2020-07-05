import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { InscribirComponent } from './inscribir/inscribir.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { ConectaService } from './servicios/conecta.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
	declarations: [ AppComponent, InscribirComponent, ConsultarComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatTableModule,
		MatMenuModule,
		ReactiveFormsModule,
		FormsModule,
		MatButtonModule,
		HttpClientModule,
		MatFormFieldModule,
    MatInputModule,
    MatSelectModule
	],

	providers: [ ConectaService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
