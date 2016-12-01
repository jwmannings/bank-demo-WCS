var app = angular.module('GoodChoicesApp', []);
app.filter('watsonFilterDefault', function () {
    return function (items, filterValue) {
        var filtered = [];
        //filter value based on tag
        if (items != undefined) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i]
                if (item.filter == filterValue && item.Hero == false) {
                    filtered.push(item);
                }
            }
        }
        return filtered;
    }
});

app.filter('watsonFilterHero', function () {
    return function (items, filterValue) {
        var filtered = [];
        //filter value based on tag
        if (items != undefined) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i]
                if (item.filter == filterValue && item.Hero == true) {
                    filtered.push(item);
                }
            }
        }
        return filtered;
    }
});