import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-infoProduto',
  templateUrl: 'infoProduto.html',
})
export class infoProduto {

  constructor(public navCtrl: NavController, public navParams: NavParams, params: NavParams) {

  		console.log('UserId', params.get('userId'));
  }

  

}
