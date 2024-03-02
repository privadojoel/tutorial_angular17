import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,UserComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial-angular17';
  city:string=' A Chiclayo';

  userOcuppation="A chix";
  childMessageEvent:string="";

  receiveEmision($event:any):void{
    this.childMessageEvent=$event;
    console.log($event);
  }
}
