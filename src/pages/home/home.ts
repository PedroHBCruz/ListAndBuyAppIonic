import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

  }
  //Quando o App abrir, o sidemenu será desativado.
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  //Quando o App sair da página inicial, o sidemenu será ativado novamente.
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }
  //Este é o método responsável pela ação que será executada após o úsuario clicar no botão "Entrar".
  login() {
    this.auth.authenticate(this.creds).subscribe(response => {
      this.auth.successfullLogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
      error => { });

  }
}
