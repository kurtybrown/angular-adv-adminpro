import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any [] = [
    {
      titulo: "Dashboard",
      icono: "mdi mdi-gauge",
      submenu: [
        { titulo: "Principal", url: "/" },
        { titulo: "Gráfica", url: "grafica1" },
        { titulo: "Promesas", url: "promesas" },
        { titulo: "Progreso", url: "progress" },
        { titulo: "Rxjs", url: "rxjs" }
        
      ]
    }
  ]
  constructor() { 

  }
}
