import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-list',
  imports: [ProductComponent, CommonModule, HeaderComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toISOString()
      },{
        id: Date.now(),
        title: 'Producto 2',
        price: 150,
        image: 'https://picsum.photos/640/640?r=22',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toISOString()
      },{
        id: Date.now(),
        title: 'Producto 2',
        price: 150,
        image: 'https://picsum.photos/640/640?r=22',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toISOString()
      },{
        id: Date.now(),
        title: 'Producto 2',
        price: 150,
        image: 'https://picsum.photos/640/640?r=22',
        creationAt: new Date().toISOString()
      }
    ];

    this.products.set(initProducts);
  }

  addToCart(product: Product){
    this.cart.update(prevState => [...prevState, product]);
  }
}
