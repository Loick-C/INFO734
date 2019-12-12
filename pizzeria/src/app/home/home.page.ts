import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  api : RestService;
  platdujour : any;
  constructor(public restapi : RestService, public loadingController : LoadingController) {
    this.api=restapi;
  }

  async getPDJ() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getPDJ()
      .subscribe(res => {
        console.log(res[0]);
        this.platdujour = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  ngOnInit() {
    this.getPDJ();
  }

}
