function searchUtil(n,e){return n.name.toLowerCase().indexOf(e.toLowerCase())>-1||n.Email.toLowerCase().indexOf(e.toLowerCase())>-1||n.EmpId===e}function getDummyData(){return[{EmpId:2,name:"Jitendra",Email:"jz@gmail.com"},{EmpId:1,name:"Minal",Email:"amz@gmail.com"},{EmpId:3,name:"Rudra",Email:"ruz@gmail.com"},{EmpId:21,name:"Jitendra1",Email:"jz@gmail.com"},{EmpId:11,name:"Minal1",Email:"amz@gmail.com"},{EmpId:31,name:"Rudra1",Email:"ruz@gmail.com"},{EmpId:22,name:"Jitendra2",Email:"jz@gmail.com"},{EmpId:12,name:"Minal2",Email:"amz@gmail.com"},{EmpId:32,name:"Rudra2",Email:"ruz@gmail.com"},{EmpId:23,name:"Jitendra3",Email:"jz@gmail.com"},{EmpId:13,name:"Minal3",Email:"amz@gmail.com"},{EmpId:33,name:"Rudra3",Email:"ruz@gmail.com"}]}angular.module("app",[]);var myApp=angular.module("app");myApp.directive("customTable",function(){return{restrict:"EA",templateUrl:"app/dataTable2/dataTable.html",controller:tableControllerFunction}}),myApp.service("filterDataService",function(){this.searched=function(n,e){return _.filter(n,function(n){return searchUtil(n,e)})},this.paged=function(n,e){for(var a=[],l=0;l<n.length;l++)l%e===0?a[Math.floor(l/e)]=[n[l]]:a[Math.floor(l/e)].push(n[l]);return a}});var tableControllerFunction=function(n,e,a){n.pageSize=4,n.allItems=getDummyData(),n.reverse=!1,n.resetAll=function(){n.filteredList=n.allItems,n.newEmpId="",n.newName="",n.newEmail="",n.searchText="",n.currentPage=0,n.Header=["","",""]},n.add=function(){n.allItems.push({EmpId:n.newEmpId,name:n.newName,Email:n.newEmail}),n.resetAll()},n.search=function(){n.filteredList=a.searched(n.allItems,n.searchText),""===n.searchText&&(n.filteredList=n.allItems),n.pagination()},n.pagination=function(){n.ItemsByPage=a.paged(n.filteredList,n.pageSize)},n.setPage=function(){n.currentPage=this.n},n.firstPage=function(){n.currentPage=0},n.lastPage=function(){n.currentPage=n.ItemsByPage.length-1},n.range=function(n,e){var a=[];e||(e=n,n=0);for(var l=n;l<e;l++)0!==l&&l!==e-1&&a.push(l);return a},n.sort=function(a){n.resetAll();var l;n.columnToOrder=a,n.filteredList=e("orderBy")(n.filteredList,n.columnToOrder,n.reverse),l=n.reverse?"glyphicon glyphicon-chevron-up":"glyphicon glyphicon-chevron-down","EmpId"===a?n.Header[0]=l:"name"===a?n.Header[1]=l:n.Header[2]=l,n.reverse=!n.reverse,n.pagination()},n.sort("name")};tableControllerFunction.$inject=["$scope","$filter","filterDataService"];var app=angular.module("app");app.directive("customSort",function(){return{restrict:"A",transclude:!0,scope:{order:"=",sort:"="},template:' <a ng-click="sort_by(order)" style="color: #555555;">    <span ng-transclude></span>    <i ng-class="selectedCls(order)"></i></a>',link:function(n){n.sort_by=function(e){var a=n.sort;a.sortingOrder==e&&(a.reverse=!a.reverse),a.sortingOrder=e},n.selectedCls=function(e){return e==n.sort.sortingOrder?"icon-chevron-"+(n.sort.reverse?"down":"up"):"icon-sort"}}}}),angular.module("app").directive("booking",function(){return{restrict:"EA",templateUrl:"app/UI/task1.html",controller:controllerFunction,link:function(n,e,a){}}});var controllerFunction=function(){},app=angular.module("app");app.directive("customSort",function(){return{restrict:"A",transclude:!0,scope:{order:"=",sort:"="},template:' <a ng-click="sort_by(order)" style="color: #555555;">    <span ng-transclude></span>    <i ng-class="selectedCls(order)"></i></a>',link:function(n){n.sort_by=function(e){var a=n.sort;a.sortingOrder==e&&(a.reverse=!a.reverse),a.sortingOrder=e},n.selectedCls=function(e){return e==n.sort.sortingOrder?"icon-chevron-"+(n.sort.reverse?"down":"up"):"icon-sort"}}}}),angular.module("app").component("app",{templateUrl:"app/hello.html",controller:function(){this.gap="Hello World!"}}),angular.module("app").run(["$templateCache",function(n){n.put("app/hello.html","<!--<custom-table></custom-table>-->\n<booking></booking>\n"),n.put("app/UI/task1.html",'<div class="navbar navbar-inverse navbar-fixed-top example6" role="navigation">\n  <div class="navbar-header">\n    <div class="navbar-header"><a class="navbar-brand" href="http://google.com"></a></div>\n  </div>\n  <ul class="nav navbar-nav pull-right">\n    <form class="navbar-form navbar-left">\n      <div class="form-group">\n        <input type="text" class="form-control" placeholder="Search">\n      </div>\n    </form>\n  </ul>\n</div>\n\n\n<div class="navbar navbar-inverse navbar-static-top" role="navigation">\n  <div>\n    <ul class="nav navbar-nav">\n      <li><a href="#">Link</a></li>\n      <li><a href="#">Link</a></li>\n      <li><a href="#">Link</a></li>\n    </ul>\n  </div>\n</div>\n\n<div class="row">\n  <div class="col-md-12">\n    <h2>LR Booking System </h2>\n\n    <div class="panel panel-info">\n      <div class="panel-heading">\n        <h3 class="panel-title">\n          Booking Details\n        </h3>\n      </div>\n      <div class="panel-body">\n        <div class="container">\n          <form>\n            <div class="row">\n              <div class="form-group col-xs-12 col-md-12">\n                <label class="radio-inline"><input type="radio" name="optradio">Normal</label>\n                <label class="radio-inline"><input type="radio" name="optradio">On Account</label>\n                <label class="radio-inline"><input type="radio" name="optradio">Service Tax</label>\n              </div>\n            </div>\n            <div class="row">\n              <div class="form-group col-xs-4 col-md-4">\n                <label for="name" class="control-label">LR Ref No</label>\n                <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n              </div>\n              <div class="form-group col-xs-4 col-md-4">\n                <label for="name" class="control-label">Date of booking</label>\n                <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n              </div>\n            </div>\n            <div class="row">\n              <div class="form-group col-xs-4 col-md-4">\n                <label for="name" class="control-label">From</label>\n                <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n              </div>\n              <div class="form-group col-xs-4 col-md-4">\n                <label for="name" class="control-label">To</label>\n                <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n              </div>\n              <div class="form-group col-xs-4 col-md-4">\n                <label for="name" class="control-label">LR Type</label>\n                <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-md-6">\n          <div class="panel panel-primary">\n            <div class="panel-heading">\n              <h3 class="panel-title">\n                Sender Details\n              </h3>\n            </div>\n            <div class="panel-body">\n              <div class="container">\n                <form>\n                  <div class="row">\n                    <div class="form-group col-xs-4 col-md-4">\n                      <label for="name" class="control-label"></label>\n                      <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="form-group col-xs-4 col-md-4">\n                      <label for="name" class="control-label">Label 3</label>\n                      <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="form-group col-xs-4 col-md-4">\n                      <label for="name" class="control-label">Label 3</label>\n                      <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="form-group col-xs-4 col-md-4">\n                      <label for="name" class="control-label">Label 3</label>\n                      <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div class="col-md-6">\n          <div class="panel panel-primary">\n            <div class="panel-heading">\n              <h3 class="panel-title">\n                Receiver Details\n              </h3>\n            </div>\n            <div class="panel-body">\n              <div class="container">\n                <form>\n                  <div class="row">\n                    <div class="form-group col-xs-4 col-md-4">\n                      <label for="name" class="control-label">Label 3</label>\n                      <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="form-group col-xs-4 col-md-4">\n                      <label for="name" class="control-label">Label 3</label>\n                      <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="form-group col-xs-4 col-md-4">\n                      <label for="name" class="control-label">Label 3</label>\n                      <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n                    </div>\n                  </div>\n                  <div class="row">\n                    <div class="form-group col-xs-4 col-md-4">\n                      <label for="name" class="control-label">Label 3</label>\n                      <input type="text" value="" class="form-control" id="name" placeholder="Ime">\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-md-12">\n          <div class="panel panel-primary">\n            <div class="panel-heading">\n              <h3 class="panel-title">\n                Item Details\n              </h3>\n            </div>\n            <div class="panel-body">\n              <custom-table></custom-table>\n            </div>\n\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n</div>'),n.put("app/dataTable/table.html",'\n        <div>\n\n            <table class="table table-striped table-condensed table-hover">\n                <thead>\n\n                    <tr>\n                        <th class="id">Id&nbsp;</th>\n                        <th class="name">Name&nbsp;</th>\n                        <th class="description">Description&nbsp;</th>\n                        <th class="field3">Field 3&nbsp;</th>\n                        <th class="field4">Field 4&nbsp;</th>\n                        <th class="field5">Field 5&nbsp;</th>\n                    </tr>\n                </thead>\n                <tfoot>\n                    <td colspan="6">\n                        <div class="pagination pull-right">\n                            <ul>\n                                <li ng-class="{disabled: currentPage == 0}">\n                                    <a href ng-click="prevPage()">« Prev</a>\n                                </li>\n\n                                <li ng-repeat="n in range(pagedItems.length, currentPage, currentPage + gap) " ng-class="{active: n == currentPage}" ng-click="setPage()">\n                                    <a href ng-bind="n + 1">1</a>\n                                </li>\n\n                                <li ng-class="{disabled: (currentPage) == pagedItems.length - 1}">\n                                    <a href ng-click="nextPage()">Next »</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </td>\n                </tfoot>\n                <tbody>\n                    <tr ng-repeat="item in pagedItems[currentPage] | orderBy:sort.sortingOrder:sort.reverse">\n                        <td>{{item.id}}</td>\n                        <td>{{item.name}}</td>\n                        <td>{{item.description}}</td>\n                        <td>{{item.field3}}</td>\n                        <td>{{item.field4}}</td>\n                        <td>{{item.field5}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n'),n.put("app/dataTable2/dataTable.html",'<div>\n  <div class="input-group">\n    <input class="form-control" ng-model="searchText" placeholder="Search" type="search" ng-change="search()"> <span class="input-group-addon">\n      <span class="glyphicon glyphicon-search"></span>\n</span>\n  </div>\n  <table class="table table-hover data-table myTable">\n    <thead>\n    <tr>\n      <th class="EmpId"><a href="#" ng-click="sort(\'EmpId\',$event)">EmpId\n        <span class="{{Header[0]}}"></span>\n      </a>\n\n      </th>\n      <th class="name"><a ng-click="sort(\'name\')" href="#"> Name\n        <span class="{{Header[1]}}"></span></a>\n      </th>\n      <th class="Email"><a ng-click="sort(\'Email\')" href="#"> Email\n        <span class="{{Header[2]}}"></span></a>\n      </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng-repeat="item in ItemsByPage[currentPage] | orderBy:columnToOrder:reverse">\n      <td>{{item.EmpId}}</td>\n      <td>{{item.name}}</td>\n      <td>{{item.Email}}</td>\n    </tr>\n    </tbody>\n  </table>\n  <ul class="pagination pagination-sm">\n    <li ng-class="{active:0}"><a href="#" ng-click="firstPage()">First</a>\n\n    </li>\n    <li ng-repeat="n in range(ItemsByPage.length)"><a href="#" ng-click="setPage()" ng-bind="n+1">1</a>\n\n    </li>\n    <li><a href="#" ng-click="lastPage()">Last</a>\n\n    </li>\n  </ul>\n\n</div>\n')}]);
//# sourceMappingURL=../maps/scripts/app-833cf6c087.js.map
