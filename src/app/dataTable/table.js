//
//
//angular.module('app')
//    .directive('data', function () {
//    return {
//        restrict: 'EA', //E = element, A = attribute, C = class, M = comment
//        templateUrl: 'app/dataTable/table.html',
//        controller: controllerFunction, //Embed a custom controller in the directive
//        link: function ($scope, element, attrs) { } //DOM manipulation
//    }
//});
//
//    var controllerFunction = function ($scope, $filter){
//
//    // init
//    $scope.sort = {
//                sortingOrder : 'id',
//                reverse : false
//            };
//
//    $scope.gap = 5;
//
//    $scope.filteredItems = [];
//    $scope.groupedItems = [];
//    $scope.itemsPerPage = 5;
//    $scope.pagedItems = [];
//    $scope.currentPage = 0;
//    $scope.items = [
//        {"id":1,"name":"name 1","description":"description 1","field3":"field3 1","field4":"field4 1","field5 ":"field5 1"},
//        {"id":2,"name":"name 2","description":"description 1","field3":"field3 2","field4":"field4 2","field5 ":"field5 2"},
//        {"id":3,"name":"name 3","description":"description 1","field3":"field3 3","field4":"field4 3","field5 ":"field5 3"},
//        {"id":4,"name":"name 4","description":"description 1","field3":"field3 4","field4":"field4 4","field5 ":"field5 4"},
//        {"id":5,"name":"name 5","description":"description 1","field3":"field3 5","field4":"field4 5","field5 ":"field5 5"},
//        {"id":6,"name":"name 6","description":"description 1","field3":"field3 6","field4":"field4 6","field5 ":"field5 6"},
//        {"id":7,"name":"name 7","description":"description 1","field3":"field3 7","field4":"field4 7","field5 ":"field5 7"},
//        {"id":8,"name":"name 8","description":"description 1","field3":"field3 8","field4":"field4 8","field5 ":"field5 8"},
//        {"id":9,"name":"name 9","description":"description 1","field3":"field3 9","field4":"field4 9","field5 ":"field5 9"},
//
//];
//    var searchMatch = function (haystack, needle) {
//        if (!needle) {
//            return true;
//        }
//        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
//    };
//
//    // init the filtered items
//    $scope.search = function () {
//        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
//            for(var attr in item) {
//                if (searchMatch(item[attr], $scope.query))
//                    return true;
//            }
//            return false;
//        });
//        // take care of the sorting order
//        if ($scope.sort.sortingOrder !== '') {
//            $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
//        }
//        $scope.currentPage = 0;
//        // now group by pages
//        $scope.groupToPages();
//    };
//
//
//    // calculate page in place
//    $scope.groupToPages = function () {
//        $scope.pagedItems = [];
//
//        for (var i = 0; i < $scope.filteredItems.length; i++) {
//            if (i % $scope.itemsPerPage === 0) {
//                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
//            } else {
//                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
//            }
//        }
//    };
//
//    $scope.range = function (size,start, end) {
//        var ret = [];
//        console.log(size,start, end);
//
//        if (size < end) {
//            end = size;
//            start = size-$scope.gap;
//        }
//        for (var i = start; i < end; i++) {
//            ret.push(i);
//        }
//         console.log(ret);
//        return ret;
//    };
//
//    $scope.prevPage = function () {
//        if ($scope.currentPage > 0) {
//            $scope.currentPage--;
//        }
//    };
//
//    $scope.nextPage = function () {
//        if ($scope.currentPage < $scope.pagedItems.length - 1) {
//            $scope.currentPage++;
//        }
//    };
//
//    $scope.setPage = function () {
//        $scope.currentPage = this.n;
//    };
//
//    // functions have been describe process the data for display
//    $scope.search();
//
//
//    }
