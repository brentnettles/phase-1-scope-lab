var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// GLOBAL
const leastFavoriteCustomer = 'someone';

//Below Function does not work because the variable in the functions was determined perviously by const aka = Global
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}

upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer();