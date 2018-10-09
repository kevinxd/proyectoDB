import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from '../../models/user'; 
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;
 
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

login(user){
  
  firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(data=> {
    console.log("login exitoso",data); 
    this.navCtrl.push('DashboardPage'); 
    });
    
}

register(){
  this.navCtrl.push('RegisterPage');
}

}
