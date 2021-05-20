import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {

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
    console.log(this.creds);
    this.navCtrl.setRoot('CategoriasPage');
  }
}
