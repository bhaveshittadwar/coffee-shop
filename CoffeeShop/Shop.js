const EventEmitter = require('node:events');

class Shop extends EventEmitter {
    constructor(shopName, employees, productCategories, products) {
        super();
        this.shopName = shopName;
        this.employees = employees;
        this.productCategories = productCategories;
        this.products = products;
        this.on('print-details', this.printDetails);
    }

    printDetails = (justMenu = false) => {
        if (!justMenu) {
            console.log(`Welcome to ${this.shopName}\n`)
            this.employees.forEach(employee => {
                console.log(`Say Hi to ${employee.name}, our ${employee.role}!\n`);
            });
        }
        
        console.log('What would you like to order?');
        this.products.forEach(product => {
            console.log(`${product.name}(${product.productCategory}): ${product.price}$`);
        });
    }
}

module.exports = Shop
