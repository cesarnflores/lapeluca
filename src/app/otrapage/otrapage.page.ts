import { Component, OnInit } from '@angular/core';
import { CommonsService } from '../services/commons.service';
import { ServicioService } from '../services/servicios.service';
import { AnimationController, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-otrapage',
  templateUrl: './otrapage.page.html',
  styleUrls: ['./otrapage.page.scss'],
})
export class OtrapagePage extends CommonsService implements OnInit {


  operacionEnPantalla: string = 'ALGO por aqui';
  listadoServicio: any;


  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,    
    public servicioService: ServicioService,
    public alertController: AlertController,
    
  ) {
    super(toastController, loadingController);
    console.log('antes invocar servicio');
    const listadoDoc = this.servicioService.buscarServicios().toPromise();
    listadoDoc.then(data => {
      this.listadoServicio = data.body;
      console.log(this.listadoServicio);
    });  

  }

  ngOnInit() {
  }

  


  async showDialogo() {
    const msg = '¿Pablo es un gato?' ;
    const alert = await this.alertController.create({
      header: '¡Atención!',
      message: msg,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: No');
          }
        }, {
          text: 'Si',
          handler: async () => {
            //await this.confirmarCotizacion(cot, stepper);
            console.log('Confirm Cancel: Si');
          }
        }
      ]
    });

    await alert.present();
  }



}
