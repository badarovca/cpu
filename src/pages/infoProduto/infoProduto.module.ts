import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoProduto } from './infoProduto';

@NgModule({
  declarations: [
    InfoProduto,
  ],
  imports: [
    IonicPageModule.forChild(InfoProduto),
  ],
  exports: [
    InfoProduto
  ]
})
export class InfoProdutoModule {}
