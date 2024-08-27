import {Snack} from './models/Snack.js';
import {EventEmitter} from './utils/EventEmitter.js';
import {createObservableProxy} from './utils/ObservableProxy.js';

class ObservableAppState extends EventEmitter {
  /**@type {import('./models/Example.js').Example[]} */
  examples = [];

  money = 0;
  snacks = [
    new Snack({name: 'Snickers', price: 6, imgUrl: 'https://www.snickers.com/sites/g/files/fnmzdf616/files/migrate-product-files/dryeqrv2efldaaoyceat.png'}),
    new Snack({name: 'Airheads', price: 3, imgUrl: 'https://snackje.com/wp-content/uploads/2021/11/Airheads-White-Mystery-Flavor-156g.png'}),
    new Snack({name: 'MnMs', price: 2, imgUrl: 'https://candyworldusa.com/cdn/shop/products/MNMSPEANUT.webp?v=1671923162'}),
    new Snack({name: 'Skittles', price: 4, imgUrl: 'https://www.kroger.com/product/images/large/front/0004000000160?banner=harristeeter'}),
    new Snack({name: 'Hershey', price: 3.1, imgUrl: 'https://s7d2.scene7.com/is/image/hersheysassets/0_34000_00240_5_701_24000_097_Item_Front?fmt=webp-alpha&hei=908&qlt=75'}),
    new Snack({name: 'Reeses', price: 3.3, imgUrl: 'https://s7d2.scene7.com/is/image/hersheysassets/0_34000_00440_9_701_44000_136_Item_Front?fmt=png-alpha&hei=908'}),
    new Snack({name: 'Kit Kat', price: 2.6, imgUrl: 'https://inroomplus.com/cdn/shop/products/kitkat_grande.jpg?v=1403186783'}),
    new Snack({name: 'Butterfinger', price: 5.4, imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000102790-1'}),
  ];

  /**@type {Snack[]} */
  mySnacks = [];
}

export const AppState = createObservableProxy(new ObservableAppState());
