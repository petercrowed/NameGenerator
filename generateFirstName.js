myApp.service('generateFirstName', function(generateNumber, capitalize) {
    this.firstName = function () {
      var firstName = ["Kr", "Ca", "Ra", "Mrok", "Cru", "Ray", "Bre", "Zed", "Drak", "Mor", "Jag",
      			"Mer", "Jar", "Mjol", "Zork", "Mad", "Cry", "Zur", "Creo", "Azak", "Azur", "Rei", "Cro", "Mar", "Luk", "a",
      			"e", "i", "o", "u", "ei", "ai", "ou", "j", "ji", "y", "oi", "au", "oo"];

      var secondName = ["an", "ar", "ad", "et", "ief", "ob", "or", "od" ];

        var name = firstName[generateNumber.genNumber(firstName.length)] + secondName[generateNumber.genNumber(secondName.length)];
        var firstName = capitalize.capitalizeFirstLetter(name);


      return firstName;
    }
});
