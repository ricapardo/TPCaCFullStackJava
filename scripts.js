
// definir descuentos
const standar = 100;
const professional = 250;
const premium = 350;

// tomar los elementos

const amount = document.getElementById('amount');
const category = document.getElementById('category');
const totalPrice = document.getElementById('totalPrice');
const Checkout = document.getElementById('Checkout');
const member = document.getElementById('member');


function calcularPago() {

    let total = 0;
    // condicionar por descuentos
    switch (category.value) {
        case "standar":
            total = amount.value * standar;
            break;
        case "professional":
            total = amount.value * professional;
            break;
        case "premium":
            total = amount.value * premium;
            break;
    }
    if(member.value.length > 0){
        total = total - (total * 0.2);
    }

    totalPrice.textContent = `Total price: $ ${total}`;

}

Checkout.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();

});