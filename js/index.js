// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};


// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceElement = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceElement.classList.add("sauce-white");
  } else {
    sauceElement.classList.remove("sauce-white");
  };
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustElement = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustElement.classList.add("crust-gluten-free");
  } else {
    crustElement.classList.remove("crust-gluten-free");
  };
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // We could do a forEach on querySelectorAll(".btn") if the state properties were easier to get!!
  // Or a for .. in
  
  // The pepperoni
  const pepperoniButton = document.querySelector(".btn.btn-pepperoni");
  if (!state.pepperoni) {pepperoniButton.classList.remove("active")} else {pepperoniButton.classList.add("active")}
  // The mushroom
  const mushroomButton = document.querySelector(".btn.btn-mushrooms");
  if (!state.mushrooms) {mushroomButton.classList.remove("active")} else {mushroomButton.classList.add("active")}
  // The peppers
  const peppersButton = document.querySelector(".btn.btn-green-peppers");
  if (!state.greenPeppers) {peppersButton.classList.remove("active")} else {peppersButton.classList.add("active")}
  // The sauce
  const sauceButton = document.querySelector(".btn.btn-sauce");
  if (!state.whiteSauce) {sauceButton.classList.remove("active")} else {sauceButton.classList.add("active")}
  // The crust
  const crustButton = document.querySelector(".btn.btn-crust");
  if (!state.glutenFreeCrust) {crustButton.classList.remove("active")} else {crustButton.classList.add("active")}
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
  // Displaying the items selected 
  // There must be a way to refactor

  const priceIngredientList = document.querySelector(".price-ingredient-list");
  const listOfStateProperties = Object.keys(ingredients);
  priceIngredientList.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let ingredient = listOfStateProperties[i];
    console.log(document.querySelector(`${ingredient}`))
    if (state[ingredient] && !document.querySelector(`${ingredient}`)) {
      let priceDisplayed = document.createElement("li");
      priceDisplayed.textContent = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      priceDisplayed.classList.add(`${ingredient}`);
      priceIngredientList.appendChild(priceDisplayed);
    } else {
      let priceDisplayed = document.querySelector(`${ingredient}`);
      if (priceDisplayed) {priceDisplayed.remove();}
    }
  }

  //Total price
  let totalPrice = basePrice;
  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient].price;
    }
  };
  let displayedTotalPrice = document.querySelector(".panel strong");
  displayedTotalPrice.textContent = "$" + totalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});