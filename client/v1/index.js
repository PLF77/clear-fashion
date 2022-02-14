// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}];

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

function findCheapestTShirt(market) {
    let cheapTshirt = {"price":99999999};
    for (let item of market) {
        if (item.name.match(/(t|T)-?shirt/) && item.price < cheapTshirt.price) {
            for (let brand of MY_FAVORITE_BRANDS) {
                if (brand.name.toUpperCase() === item.brand.toUpperCase()) {
                    cheapTshirt = item;
                }
            }
        }
    }
    return cheapTshirt;
}
let cheapestTShirt = findCheapestTShirt(marketplace);
console.log(cheapestTShirt);

/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable

let nbProducts = marketplace.length;
console.log(nbProducts);


// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have

let allBrands = [... new Set(marketplace.map(item => item.brand))];
console.log(allBrands);

// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

function sortByPriceASC(data) {
    let newData = JSON.parse(JSON.stringify(data));
    for (let passes = 0; passes < newData.length; passes++) {
        let sorted = true;
        for (let i = 0; i < newData.length-1; i++) {
            if (newData[i].price > newData[i + 1].price) {
                [newData[i], newData[i + 1]] = [newData[i + 1], newData[i]];
                sorted = false;
            }
        }
        if (sorted) {
            return newData;
        }
    }
}
let sortedMarketplace = sortByPriceASC(marketplace);
console.log(sortedMarketplace);
// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable

function sortByDate(data) {
    let sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    return sortedData;
}
console.log(sortByDate(marketplace));

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list

let productsBetween50And100 = marketplace.filter(item => (item.price <= 100 && item.price>=50));
console.log(productsBetween50And100);

// 🎯 TODO: Average price
// 1. Determine the average price of the marketplace
// 2. Log the average
let avgPriceOfMarketplace = marketplace.map(item => item.price).reduce((sum, value) => sum+value)/marketplace.length;
console.log(avgPriceOfMarketplace);

/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
// 2. Log the variable
// 3. Log the number of products by brands

const brands = {};
for (let brand of allBrands) {
    brands[brand] = [];
}
for (let product of marketplace) {
    brands[product.brand].push(product);
}
console.log(brands);
let nbOfProductsByBrand = []
for (let brand in brands) {
    nbOfProductsByBrand.push({ brand: brands[brand].length })
};
console.log(nbOfProductsByBrand);

// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

for (let brand in brands) {
    brands[brand].sort((a, b) => b.price - a.price);
}
console.log(brands)

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

for (let brand in brands) {
    brands[brand].sort((a, b) => new Date(a.date) - new Date(b.date));
}
console.log(brands)


/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

let p90valueByBrand = {};
for (let brand in brands) {
    let sorted = brands[brand].sort((a, b) => a.price - b.price);
    let p90value = sorted[Math.ceil(brand.length / 10)].price;
    p90valueByBrand[brand] = p90value;
}
console.log(p90valueByBrand);

/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.

let today = new Date();
let newProducts = false;
for (let product of COTELE_PARIS) {
    let weeksFromRelease = Math.floor((today - new Date(product.released)) / (1000 * 60 * 60 * 24 * 7));
    console.log(weeksFromRelease);
    if (weeksFromRelease < 2) {
        newProducts = true;
        break;
    }
}
console.log(`New products at COTELE PARIS: ${newProducts}`);


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€

let reasonableShop = false;
for (let product of COTELE_PARIS) {
    if (product.price > 100) {
        reasonableShop = false;
    }
}
console.log(`COTELE is a reasonable shop:${reasonableShop}`);

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product

function findById(id) {
    return COTELE_PARIS.find(item => item.uuid === id);
}
console.log(findById('b56c6d88-749a-5b4c-b571-e5b5c6483131'));
// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product

function deleteByID(id) {
    let productToDeleteIndex = COTELE_PARIS.findIndex(item => item.uuid === id);
    COTELE_PARIS.splice(productToDeleteIndex, 1);
}
deleteByID('b56c6d88-749a-5b4c-b571-e5b5c6483131');
console.log(COTELE_PARIS);

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

COTELE_PARIS.push(blueJacket);
console.log(COTELE_PARIS);

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?

console.log(jacket);
console.log(blueJacket);

//copied by reference not by value

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties

jacket = JSON.parse(JSON.stringify(blueJacket));
jacket.favorite = true;
console.log(jacket);



/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
let localStorage = [...MY_FAVORITE_BRANDS];
console.log(localStorage);


