function calculatePrice (product, price) {
    let deliveryCost = 0;

    if (price > 1 && price <= 2000) {
        deliveryCost = 300;
    } else if (price > 2000 && price <= 4000) {
        deliveryCost = 500;
    } else if (price >4000) {
        deliveryCost = 700;
    }

    let finalPrice = price + deliveryCost;
    
    let message = `El producto ${product} cuesta $${price}. ` + 
    `Su costo de envío es de $${deliveryCost}. ` + 
    `Por lo tanto, el precio final es de $${finalPrice}.`
    
    console.log(message);
}

calculatePrice('Macbook', 2500);
calculatePrice('Celular', 500);
calculatePrice('Playstation', 4500);
