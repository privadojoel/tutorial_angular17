import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  favoriteFramewok:string='';
  contactForm=new FormGroup({
    name: new FormControl('',Validators.required),
    email:new FormControl('', Validators.required)
  });
  sendForm():void{
    console.log(this.favoriteFramewok);
  }

  handleContactFormSubmit():void{
    console.log(this.contactForm.value);
  }
}
