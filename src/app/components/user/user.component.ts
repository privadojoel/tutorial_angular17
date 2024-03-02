import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { OperatingSystem } from '../../interfaces/operating-system';
import { OperatingSystemService } from '../../core/operating-systems.service';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation:string="";
  @Output() greet:EventEmitter<string>=new EventEmitter<string>();
  //Uso de inject - Servicio api
  operatingSystemService:OperatingSystemService=inject(OperatingSystemService);
  operatingSystem: OperatingSystem[]=this.operatingSystemService.getOperatingSystems();
  usersame:string='joel';
  doesUserExists:boolean=false;
  
  isEditable:boolean=true;
  onMouseOver(osName:string){
    console.log(osName);
  }

  emitToParent():void{
    this.greet.emit('Esto es una prueba, del hijo al padre');
  }
}

