import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { API_CONFIG } from '../../config/api.config';
import { CategoriaDTO } from '../../models/categorias.dto';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService: CategoriaService,
    public menu: MenuController) {
  }
  ionViewWillEnter() {
    this.menu.swipeEnable(true);
  }
  ionViewDidLoad() {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {});
  }

  showProdutos(categoria_id : string) {
    this.navCtrl.push('ProdutosPage', {categoria_id: categoria_id});    
  }
}