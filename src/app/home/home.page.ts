import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private router: Router,) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  inicializarAlgo() {
    console.log('GATOoo');
  }

  goToPageRouter() {

    let navigationExtras: NavigationExtras;
    let objetito = {
      nombre: 'Cesar',
      apellido: 'Flores'
    }

    navigationExtras = {
      state: {
        vendedorNombre: 'pablito',
        algunObjeto: objetito,
      }

    };

    this.router.navigate(['otrapage'], navigationExtras);

  }


}
