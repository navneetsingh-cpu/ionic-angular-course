import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;
  isLogin = true;

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() { }

  onLogin() {

    this.isLoading = true;
    this.authService.login();

    this.presentLoading();
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigateByUrl('/places/tabs/discover');
      this.loadingCtrl.dismiss();
    }, 1500);
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      keyboardClose: true, message: 'Logging in...',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    if (this.isLogin) {
      // Send a request to login servers
    } else {
      // Send a request to signup servers
    }
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
