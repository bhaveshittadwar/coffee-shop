
const CoffeeShop = require('./CoffeeShop/Shop');

const hidePeople = true;
const myCoffeeShop = new CoffeeShop(
                        // Coffee Shop Name
                        'My Coffee Place',
                        // Employees
                        [
                            {
                                name: 'Thomas',
                                role: 'admin'
                            },
                            {
                                name: 'Sam',
                                role: 'Barista'
                            },
                            {
                                name: 'Peter',
                                role: 'Barista'
                            }
                        ],
                        // Product Categories
                        [
                            'Espresso',
                            'Bakery'
                        ],
                        // Products
                        [
                            {
                                name: 'Latte',
                                productCategory: 'Espresso',
                                price: 4
                            },
                            {
                                name: 'Cappucino',
                                productCategory: 'Espresso',
                                price: 4.5
                            },
                            {
                                name: 'Espresso Shots',
                                productCategory: 'Espresso',
                                price: 2.75
                            },
                            {
                                name: 'Cafe Mocha',
                                productCategory: 'Espresso',
                                price: 6
                            },
                            {
                                name: 'Muffin',
                                productCategory: 'Bakery',
                                price: 3
                            },
                            {
                                name: 'Cinnamon Roll',
                                productCategory: 'Bakery',
                                price: 4.5
                            }
                        ]
                    );

myCoffeeShop.emit('print-details', hidePeople);

// TODOS
// 1. Setup Customer Actions such as order, pay, change etc. Start with basic buy operation
// 2. Add a quantity attribute to each products
// 3. Add a preparation time attribute to the employee
// 4. Add a patience score attribute to the customer which will be unknown to the employees 
// in the first interaction and will be generated the first time randomly. Assume that the 
// emloyees share the patience score with everyone else
// 5. Setup events for everything