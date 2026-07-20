const products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Phone", price: 599, inStock: true },
  { name: "Tablet", price: 399, inStock: false },
  { name: "Watch", price: 199, inStock: true },
  { name: "Headphones", price: 149, inStock: false },
];

// forEach --- do something FOR EACH item (no return value)

products.forEach((product) => {
  console.log(product.name, "-", product.price);
});

// map --- TRANSFORM each item, return a NEW array (original untouched)
const names = products.map((product) => product.name);
console.log(names);

const pricesWithTax = products.map((product) => ({
  ...product,
  priceWithTax: product.price * 1.1,
}));

// filter --- keep only items where the condition is TRUE, returns new array
const inStockProducts = products.filter((product) => product.inStock);
console.log(inStockProducts.length);

const affordableProducts = products.filter((product) => product.price < 300);
console.log(affordableProducts.map((p) => p.name));

// reduce --- COMBINE all items into a single value
const totalValue = products.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log("Total:", totalValue);

// CHAINING --- combine methods for powerful one-linears
const inStockTotal = products
  .filter((p) => p.inStock) // keep only in-stock items
  .reduce((sum, p) => sum + p.price, 0); // add up their prices
console.log('In-stock:', inStockTotal)