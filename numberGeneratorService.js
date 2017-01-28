myApp.service('generateNumber', function() {
    this.genNumber= function (length) {
        return Math.floor(Math.random() * length) + 0;
    }
});
