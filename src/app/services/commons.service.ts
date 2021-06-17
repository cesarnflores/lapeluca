import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable()
export class CommonsService {

  constructor(public toastController: ToastController,
    public loadingController: LoadingController,
  ) {

  }

  async mostrarToastOk(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 8000,
      position: 'bottom',
      cssClass: 'toast-ok',
    });

    toast.present();
  }

  async mostrarToastError(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      position: 'bottom',
      cssClass: 'toast-error',
    });
    toast.present();
  }

  async mostrarLoader(mensaje: string) {

    await this.loadingController.create({
      message: mensaje
    }).then((res) => {
      res.present();
    });

  }

  async ocultarLoader() {
    this.loadingController.dismiss().then((res) => {
      if (!res) {
        this.loadingController.dismiss();
      }
    }).catch((error) => {
      console.log('error', error);
    });
  }

}
