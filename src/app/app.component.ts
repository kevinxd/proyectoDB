import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    var config = {
      apiKey: "AIzaSyDKJbH-MntXnlFD5SQX0ZrAvZ1qKq9rTlo",
      authDomain: "jygs-2a8eb.firebaseapp.com",
      databaseURL: "https://jygs-2a8eb.firebaseio.com",
      projectId: "jygs-2a8eb",
      storageBucket: "jygs-2a8eb.appspot.com",
      messagingSenderId: "702227473201"
    };
    firebase.initializeApp(config);
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

