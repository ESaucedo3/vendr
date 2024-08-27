export class Snack {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
  }

  get generateSnackCard() {
    return /*html*/ `<div class="col-lg-4">
            <div class="card">
              <img class="img-fluid" src="${this.imgUrl}" alt="Snack" />
              <div class="card-body bg-dark text-light">
                <div class="row">
                  <div class="col-8">
                    <p>${this.name}</p>
                    <p>$${this.price}</p>
                  </div>
                  <div class="col-4 align-self-center">
                    <button id="${this.name}" class="btn btn-info" type="button" onclick="app.VendingController.purchaseSnack('${this.name}')">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
  }
}
