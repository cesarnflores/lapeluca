import { Component, OnInit } from '@angular/core';
import { CommonsService } from '../services/commons.service';
import { ServicioService } from '../services/servicios.service';
import { AnimationController, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-otrapage',
  templateUrl: './otrapage.page.html',
  styleUrls: ['./otrapage.page.scss'],
})
export class OtrapagePage extends CommonsService implements OnInit {


  operacionEnPantalla: string = 'ALGO por aqui';
  listadoServicio: any;
  vendedorNombre: string = '';
  objetito: any = {};

  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,    
    public servicioService: ServicioService,
    public alertController: AlertController,
    private route: ActivatedRoute, 
    private router: Router
    
  ) {
    super(toastController, loadingController);
    console.log('antes invocar servicio');
    const listadoDoc = this.servicioService.buscarServicios().toPromise();
    listadoDoc.then(data => {
      this.listadoServicio = data.body;
      console.log(this.listadoServicio);
    }); 
    
    
    try {
      this.route.queryParams.subscribe(() => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.vendedorNombre = this.router.getCurrentNavigation().extras.state.vendedorNombre;
          this.objetito = this.router.getCurrentNavigation().extras.state.algunObjeto;
        }
      });
    } catch (error) {
      console.log("ERROR --> " + error);
    }



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
