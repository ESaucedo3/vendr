import {AppState} from '../AppState.js';

class SnacksService {
  addQuarter() {
    AppState.money += 0.25;
  }

  purchaseSnack(specificSnack) {
    const actualSnack = AppState.snacks.find((snack) => snack.name === specificSnack);
    if (AppState.money < actualSnack.price) return;
    AppState.money -= actualSnack.price;
  }
}

export const snacksService = new SnacksService();
