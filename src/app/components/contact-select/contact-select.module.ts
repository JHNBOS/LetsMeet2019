import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactSelectComponent } from 'src/app/components/contact-select/contact-select.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule
	],
	exports: [ContactSelectComponent],
	entryComponents: [ContactSelectComponent],
	declarations: [ContactSelectComponent]
})
export class ContactSelectModule { }
