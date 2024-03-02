import { Injectable } from '@angular/core';
import { OperatingSystem } from '../interfaces/operating-system';

@Injectable({
  providedIn: 'root'
})
export class OperatingSystemService {
  //Usando Interface
  operatingSystem : OperatingSystem[] =[{id: 'win', name: 'Windows'}, {id: 'osx', name: 'Mac OS'}, {id: 'linx', name: 'Linux'}, {id: 'otrs', name: 'Otros'}, {id: 'xs', name: 'Poornima'}];
  constructor() { }

  getOperatingSystems():OperatingSystem[]{
    return this.operatingSystem;
  }

}
