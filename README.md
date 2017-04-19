# Exercise
 First solution is in marcopolo.js



Second solution

we can limit the scope of directive using scope property while creating a directive give scope :{}

 angular.module('app').directive('myIsolatedScope', function () {
     return {
         scope: {},  // isolatedscope
     };
 });


 Directives have access to the parent scope by default in Angular and , If the parent scope changes it will change the properties of directive as well which are
 inherited from parent so , If you want to make a reuseable directive you can’t rely on the parent scope , thats why you need parent scope





First Do a npm install followed by bower install
