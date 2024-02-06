var customerName = 'bob';


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function lowerCaseName() {
  customerName = customerName.toLowerCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// GLOBAL
const leastFavoriteCustomer = 'someone';

// not working below
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}

