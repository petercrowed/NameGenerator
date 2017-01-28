myApp.service('generateWarriorName', function(generateNumber, generateFirstName, generateSecondName) {
    this.generateWarriorName = function () {

      var firstName = generateFirstName.firstName();
      var secondName = generateSecondName.secondName();
      var warriorName = firstName + " " + secondName;

      return warriorName;
    }
});
