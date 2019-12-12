import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.page.html',
  styleUrls: ['./commander.page.scss'],
})
export class CommanderPage implements OnInit {
  api : RestService;
  pizza : any;
  constructor(public restapi : RestService, public loadingController : LoadingController) { 
    this.api=restapi;
  }



  async getAllPizzas() {

    const loading = await this.loadingController.create({
      message: 'Loading'
    });
  
    await loading.present();
    await this.api.getAllPizzas()
      .subscribe(res => {
        console.log(res[0]);
        this.pizza = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    }
  ngOnInit() {
    this.getAllPizzas();
  }

}
