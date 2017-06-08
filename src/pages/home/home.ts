import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

const posmht = window['posmht'];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  

  teste(){
    console.log(posmht);
    posmht.inicia();
    
  }
}
