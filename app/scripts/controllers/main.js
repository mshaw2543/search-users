'use strict';

/**
 * @ngdoc function
 * @name searchUserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchUserApp
 */
angular.module('searchUserApp')
  .controller('MainCtrl',['UserDataService', function (UserDataService) {

    this.searchText = '';
    this.selectedIndex = -1;
    this.users = UserDataService.getUsersData();

    this.foundInItems = function(items){
      if (this.searchText){
        for (var value of items){
          if (value.toLowerCase().match(this.searchText.toLowerCase()))
            return true;
        }
      }
      return false;
    };

    this.selectUser = function(name){
      this.searchText = name;
    };

    this.selectIndex = function(index){
      this.selectedIndex = index;
    };

    this.clear = function () {
      this.searchText = '';
    };
    this.navigate = function (event) {
      if (event.which === 38 && this.selectedIndex > 0) {
        this.selectedIndex -= 1;
        this.scroll('up');
      } else if (event.which === 40 && this.selectedIndex < this.filtered.length-1 ) {
        this.selectedIndex += 1;
        this.scroll('down');
      } else if (event.which === 13 && this.selectedIndex > -1) {
        this.searchText = this.filtered[this.selectedIndex].name;
        this.selectedIndex = -1;
      }
    }

    this.scroll = function (direction){
      var elem = angular.element(".selected");
      var parent = angular.element("ul");
      if (elem.length) {
        if (direction === 'down'){
          parent[0].scrollTop += elem.offset().top - parent.offset().top;
        } else if (direction === 'up' &&  parent.offset().top - elem.offset().top < elem.height()) {
          parent[0].scrollTop -= elem.height() + 20 + (parent.offset().top - elem.offset().top);
        }
      }
    }

  }]);
