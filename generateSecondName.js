myApp.service('generateSecondName', function(generateNumber, capitalize) {
    this.secondName = function () {
      var randomNumber = 0;
      var warriorNames = ["hammer" , "stone" , "rock" , "fist" , "strength"];

      var firstNumber = generateNumber.genNumber(warriorNames.length);

      var secondNumber = duplicateNumber(firstNumber);
      var newWarriorName = warriorNames[firstNumber] + warriorNames[secondNumber];
      var WarriorNameCapitalized = capitalize.capitalizeFirstLetter(newWarriorName);
      function duplicateNumber(firstNumber)
      {
        name = generateNumber.genNumber(warriorNames.length);
        if(name == firstNumber) {
          return duplicateNumber(firstNumber);
         }
         else {
          if(name != firstNumber)
          return name;
         }
      }

    return WarriorNameCapitalized;
    }
});
