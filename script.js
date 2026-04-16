$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.nap-button').click(clickedNapButton);
  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Espeon", weight:10, happiness:5, energy:5};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info['happiness'] += 3;
      // Increase pet weight
      pet_info['weight'] += 2;
      showNotification("Espeon loved the treat 💜");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info['happiness'] += 2;
      // Decrease pet weight
      pet_info['weight'] -= 1;
      pet_info['energy'] -= 1;
      showNotification("Espeon dashed around ✨");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info['happiness'] -= 1;
      // Decrease pet weight
      pet_info['weight'] -= 2;
      pet_info['energy'] -= 2;
      showNotification("Espeon trained well 💪");
      checkAndUpdatePetInfoInHtml();
    }

    function clickedNapButton() {
      pet_info['happiness'] += 3;
      pet_info['weight'] += 1;
      pet_info['energy'] += 4;
      showNotification("Espeon is fast asleep 💤");
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info['weight'] < 0) {
        pet_info['weight'] = 0;
      }
      if (pet_info['happiness'] < 0) {
        pet_info['happiness'] = 0;
      }
      if (pet_info['energy'] < 0) {
        pet_info['energy'] = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info['energy']);
      
      // .toggleClass() - jQuery method that adds/removes one or more classes from each element in the matched set depending on whether the class is already present or not.
      // In this case, I used it to pass a second boolean argument so that the "sad" class is added to the pet image when happiness equals 0.
      // When this happens, I wanted the pet to appear "sad" by triggering a CSS grayscale filter to visually represent the pet's sadness.
      // This is removed when the happiness rises above 0 returning the pet to their normal apearance/color

      $('.pet-image').toggleClass('sad', pet_info['happiness'] === 0);
    }

    function showNotification(message) {
      $('.notification').text(message);

      // .animate() - jQuery method that performs a custom animation of a set of CSS properties (over a specified time/duration).
      // In this case, I animated the the pet image's top property upward by 10px over 150ms, then chain a second .animate() call in the callback function to return it to 0px.
      // This creates a bounce effect each time a button is pressed and gives an animated look to the pet.
      // This works because the pet image has position:relative set in the CSS.

      $('.pet-image').animate({ top: '-10px' }, 150, function() {
        $(this).animate({ top: '0px' }, 150);
      });
      $('.notification').stop(true, true).show().delay(5000).fadeOut(500);
    }