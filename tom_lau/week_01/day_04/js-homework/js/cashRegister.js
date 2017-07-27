// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example


let cashRegister = {
  banana: 1.25,
  handkerchief: 0.99,
  tShirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

const cartForParty = function(cashRegister) {
  let totalCash= (cashRegister.banana + cashRegister.handkerchief + cashRegister.tShirt + cashRegister.apple + cashRegister.nalgene + cashRegister.proteinShake);
  console.log(`The total price = $ ${totalCash}`);
};
cartForParty(cashRegister);
