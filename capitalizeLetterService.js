myApp.service('capitalize', function() {
    this.capitalizeFirstLetter = function (string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
