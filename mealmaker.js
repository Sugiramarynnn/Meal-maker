// Step 1-3: Create the Menu Object
const menu = {
    _meal: '',
    _price: 0
  };
  
  // Step 4: Directly manipulate the properties
  menu._meal = 42; // assigning a number value
  menu._price = 'forty-two'; // assigning a string value
  
  // Log the menu object to see the confusion
  console.log(menu);
  
  // Step 5-7: Add Setter Methods
  Object.defineProperty(menu, 'meal', {
    set: function(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      }
    }
  });
  
  Object.defineProperty(menu, 'price', {
    set: function(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      }
    }
  });
  
  // Step 8: Use the setter methods
  menu.meal = 'Burger';
  menu.price = 10;
  
  // Log the updated menu object
  console.log(menu);
  
  // Step 9-10: Add Getter Method
  Object.defineProperty(menu, 'todaysSpecial', {
    get: function() {
      if (this._meal && this._price) {
        return `Today’s Special is ${this._meal} for $${this._price}!`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  });
  
  // Step 11: Use the getter method
  console.log(menu.todaysSpecial);
  