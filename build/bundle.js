"use strict";angular.module("memry",["ngRoute"]),angular.module("memry").config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html"})}]),angular.module("memry").controller("DefinitionFormController",["$scope","defServer","defModel",function(e,t,n){e.hideDescription=!0,e.titleChange=function(){var t=n.findIDByTitleSubstr(e.title);e.hideDescription=t||""===e.title},e.titleInputBegin=function(){},e.titleInputEnd=function(){},e.addDefinition=function(){if(e.title&&e.description){var n={title:e.title,description:e.description};t.create(n),e.title="",e.description="",e.hideDescription=!0}}}]),angular.module("memry").controller("DefinitionListController",["$scope","defServer",function(e,t){e.turnOnEditMode=function(t){e.definitions.forEach(function(e){e.editMode=!1}),e.definitions[t].editMode=!0},e.turnOffEditMode=function(t){e.definitions[t].editMode=!1},e.editDefinition=function(n,i){e.turnOffEditMode(n),t.update(i)},e.delDefinition=function(e){t.delete(e)}}]),angular.module("memry").controller("MainController",function(){}),angular.module("memry").factory("defModel",["defServer",function(e){var t={},n={};return e.getAll().then(function(e){n.defs=e.data}),t.findIDByTitleSubstr=function(e){if("string"!=typeof e)throw new Error("findIDByTitleSubstr requires string input");var t=null;return n.defs.forEach(function(n){var i=n.title.indexOf(e);return 0===i?(t=n._id,!0):void 0}),t},t}]),angular.module("memry").factory("defServer",["$http",function(e){return{getAll:function(){return e.get("/api/defs")},getOne:function(t){return e.get("/api/defs/"+t)},create:function(t){return e.post("/api/defs",t)},update:function(t){return e.put("/api/defs/"+t._id,t)},"delete":function(t){return e.delete("/api/defs/"+t)}}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbXJ5L21vZHVsZS5qcyIsIm1lbXJ5L2NvbmZpZy9jZmctcm91dGVzLmpzIiwibWVtcnkvY29udHJvbGxlcnMvY3RybC1kZWZfZm9ybS5qcyIsIm1lbXJ5L2NvbnRyb2xsZXJzL2N0cmwtZGVmX2xpc3QuanMiLCJtZW1yeS9jb250cm9sbGVycy9jdHJsLW1haW4uanMiLCJtZW1yeS9zZXJ2aWNlcy9zcnZjLWRlZl9tb2RlbC5qcyIsIm1lbXJ5L3NlcnZpY2VzL3NydmMtZGVmX3NlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxZQUVBLFNBQUEsT0FBQSxTQUFBLFlDREEsUUFBQSxPQUFBLFNBQ0EsUUFBQSxpQkFBQSxTQUFBLEdBRUEsRUFDQSxLQUFBLEtBQ0EsWUFBQSx1QkNMQSxRQUFBLE9BQUEsU0FDQSxXQUFBLDRCQUFBLFNBQUEsWUFBQSxXQUFBLFNBQUEsRUFBQSxFQUFBLEdBRUEsRUFBQSxpQkFBQSxFQUNBLEVBQUEsWUFBQSxXQUNBLEdBQUEsR0FBQSxFQUFBLG9CQUFBLEVBQUEsTUFDQSxHQUFBLGdCQUFBLEdBQUEsS0FBQSxFQUFBLE9BR0EsRUFBQSxnQkFBQSxhQUlBLEVBQUEsY0FBQSxhQUlBLEVBQUEsY0FBQSxXQUNBLEdBQUEsRUFBQSxPQUFBLEVBQUEsWUFBQSxDQUNBLEdBQUEsSUFDQSxNQUFBLEVBQUEsTUFDQSxZQUFBLEVBQUEsWUFHQSxHQUFBLE9BQUEsR0FHQSxFQUFBLE1BQUEsR0FDQSxFQUFBLFlBQUEsR0FDQSxFQUFBLGlCQUFBLE9DN0JBLFFBQUEsT0FBQSxTQUNBLFdBQUEsNEJBQUEsU0FBQSxZQUFBLFNBQUEsRUFBQSxHQUVBLEVBQUEsZUFBQSxTQUFBLEdBQ0EsRUFBQSxZQUFBLFFBQUEsU0FBQSxHQUNBLEVBQUEsVUFBQSxJQUVBLEVBQUEsWUFBQSxHQUFBLFVBQUEsR0FHQSxFQUFBLGdCQUFBLFNBQUEsR0FDQSxFQUFBLFlBQUEsR0FBQSxVQUFBLEdBSUEsRUFBQSxlQUFBLFNBQUEsRUFBQSxHQUNBLEVBQUEsZ0JBQUEsR0FHQSxFQUFBLE9BQUEsSUFHQSxFQUFBLGNBQUEsU0FBQSxHQUNBLEVBQUEsT0FBQSxPQ3ZCQSxRQUFBLE9BQUEsU0FDQSxXQUFBLGlCQUFBLGNDREEsUUFBQSxPQUFBLFNBQ0EsUUFBQSxZQUFBLFlBQUEsU0FBQSxHQUdBLEdBQUEsTUFFQSxJQStCQSxPQTdCQSxHQUFBLFNBQ0EsS0FBQSxTQUFBLEdBQ0EsRUFBQSxLQUFBLEVBQUEsT0FRQSxFQUFBLG9CQUFBLFNBQUEsR0FFQSxHQUFBLGdCQUFBLEdBQ0EsS0FBQSxJQUFBLE9BQUEsNENBRUEsSUFBQSxHQUFBLElBV0EsT0FWQSxHQUFBLEtBQUEsUUFBQSxTQUFBLEdBQ0EsR0FBQSxHQUFBLEVBQUEsTUFBQSxRQUFBLEVBRUEsT0FBQSxLQUFBLEdBQ0EsRUFBQSxFQUFBLEtBRUEsR0FIQSxTQU9BLEdBR0EsS0NyQ0EsUUFBQSxPQUFBLFNBQ0EsUUFBQSxhQUFBLFFBQUEsU0FBQSxHQUVBLE9BQ0EsT0FBQSxXQUNBLE1BQUEsR0FBQSxJQUFBLGNBR0EsT0FBQSxTQUFBLEdBQ0EsTUFBQSxHQUFBLElBQUEsYUFBQSxJQUdBLE9BQUEsU0FBQSxHQUNBLE1BQUEsR0FBQSxLQUFBLFlBQUEsSUFHQSxPQUFBLFNBQUEsR0FDQSxNQUFBLEdBQUEsSUFBQSxhQUFBLEVBQUEsSUFBQSxJQUdBLFNBQUEsU0FBQSxHQUNBLE1BQUEsR0FBQSxPQUFBLGFBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwgYW5ndWxhciovXG4ndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdtZW1yeScsIFsnbmdSb3V0ZSddKTtcbiIsIi8qZ2xvYmFsIGFuZ3VsYXIqL1xuXG5hbmd1bGFyLm1vZHVsZSgnbWVtcnknKVxuICAuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgLndoZW4oJy8nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFpbi5odG1sJ1xuICAgICAgfSk7XG4gIH0pXG47IiwiLypnbG9iYWwgYW5ndWxhciovXG5cbmFuZ3VsYXIubW9kdWxlKCdtZW1yeScpXG4gIC5jb250cm9sbGVyKCdEZWZpbml0aW9uRm9ybUNvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCBkZWZTZXJ2ZXIsIGRlZk1vZGVsKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICRzY29wZS5oaWRlRGVzY3JpcHRpb24gPSB0cnVlO1xuICAgICRzY29wZS50aXRsZUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZvdW5kVGl0bGUgPSBkZWZNb2RlbC5maW5kSURCeVRpdGxlU3Vic3RyKCRzY29wZS50aXRsZSk7XG4gICAgICAkc2NvcGUuaGlkZURlc2NyaXB0aW9uID0gKGZvdW5kVGl0bGUgfHwgJHNjb3BlLnRpdGxlID09PSAnJyk7XG4gICAgfTtcblxuICAgICRzY29wZS50aXRsZUlucHV0QmVnaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vJHNjb3BlLmN1cnJlbnRTY3JvbGxEZWZJRCA9IG51bGw7XG4gICAgfTtcblxuICAgICRzY29wZS50aXRsZUlucHV0RW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyRzY29wZS5jdXJyZW50U2Nyb2xsRGVmSUQgPSBudWxsO1xuICAgIH07XG5cbiAgICAkc2NvcGUuYWRkRGVmaW5pdGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICBpZiAoJHNjb3BlLnRpdGxlICYmICRzY29wZS5kZXNjcmlwdGlvbikge1xuICAgICAgICB2YXIgZGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICB0aXRsZTogJHNjb3BlLnRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAkc2NvcGUuZGVzY3JpcHRpb25cbiAgICAgICAgfTtcblxuICAgICAgICBkZWZTZXJ2ZXIuY3JlYXRlKGRlZmluaXRpb24pO1xuXG4gICAgICAgIC8vYmxhbmsgb3V0IHRoZSBmb3JtXG4gICAgICAgICRzY29wZS50aXRsZSA9ICcnO1xuICAgICAgICAkc2NvcGUuZGVzY3JpcHRpb24gPSAnJztcbiAgICAgICAgJHNjb3BlLmhpZGVEZXNjcmlwdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfSlcbjsiLCIvKmdsb2JhbCBhbmd1bGFyKi9cblxuYW5ndWxhci5tb2R1bGUoJ21lbXJ5JylcbiAgLmNvbnRyb2xsZXIoJ0RlZmluaXRpb25MaXN0Q29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsIGRlZlNlcnZlcikge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkc2NvcGUudHVybk9uRWRpdE1vZGUgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgJHNjb3BlLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICBkLmVkaXRNb2RlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgICRzY29wZS5kZWZpbml0aW9uc1tpbmRleF0uZWRpdE1vZGUgPSB0cnVlO1xuICAgIH07XG5cbiAgICAkc2NvcGUudHVybk9mZkVkaXRNb2RlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICRzY29wZS5kZWZpbml0aW9uc1tpbmRleF0uZWRpdE1vZGUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgLy90b2RvIG5lZWQgdG8gZWl0aGVyIHBhc3MgZGVmX2lkIG9yIGZpbmQgYSB2ZXJzaW9uIG9mICRpbmRleCB0aGF0IHRyYWNrcyB0aGUgdW5zb3J0ZWQgb3JkZXIuIG9yIGFscGhhIHNvcnQgaW4gdGhlIGRhdGFiYXNlIChvciBpbiB0aGUgcmV0cmlldmVkIHZlcnNpb24hKVxuICAgICRzY29wZS5lZGl0RGVmaW5pdGlvbiA9IGZ1bmN0aW9uKGluZGV4LCBkZWYpIHtcbiAgICAgICRzY29wZS50dXJuT2ZmRWRpdE1vZGUoaW5kZXgpO1xuICAgICAgLy90ZW1wb3JhcmlseSBjaGFuZ2UgdGhlIHZpc2libGUgZGVzY3JpcHRpb24gc28gdGhlcmUncyBpbW1lZGlhdGUgdXBkYXRlIGJlZm9yZSBzZXJ2ZXIgcmVzcG9uZHNcbiAgICAgIC8vJHNjb3BlLmRlZmluaXRpb25zW2luZGV4XS5kZXNjcmlwdGlvblVSTCA9ICRzY29wZS5kZWZpbml0aW9uc1tpbmRleF0uZGVzY3JpcHRpb247XG4gICAgICBkZWZTZXJ2ZXIudXBkYXRlKGRlZik7XG4gICAgfTtcblxuICAgICRzY29wZS5kZWxEZWZpbml0aW9uID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZGVmU2VydmVyLmRlbGV0ZShpZCk7XG4gICAgfTtcbiAgfSlcbjsiLCIvKmdsb2JhbCBhbmd1bGFyKi9cblxuYW5ndWxhci5tb2R1bGUoJ21lbXJ5JylcbiAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgfSlcbjsiLCIvKmdsb2JhbCBhbmd1bGFyKi9cblxuYW5ndWxhci5tb2R1bGUoJ21lbXJ5JylcbiAgLmZhY3RvcnkoJ2RlZk1vZGVsJywgZnVuY3Rpb24gKGRlZlNlcnZlcikge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvL3B1YmxpYyBtZXRob2RzXG4gICAgdmFyIGFwaSA9IHt9O1xuICAgIC8vcHJpdmF0ZSBkYXRhXG4gICAgdmFyIGRhdGEgPSB7fTtcblxuICAgIGRlZlNlcnZlci5nZXRBbGwoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGRhdGEuZGVmcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KTtcblxuICAgIC8qXG4gICAgIyBmaW5kSURCeVRpdGxlU3Vic3RyXG4gICAgcmV0dXJucyB0aGUgaWQgb2YgdGhlIGZpcnN0IGRlZmluaXRpb24gd2hvc2UgdGl0bGUgYmVnaW5zIHdpdGggdGhlIHN1YnN0cmluZy5cbiAgICByZWxpZXMgb24gdGhlIHNlcnZlciByZXR1cm5pbmcgdGhlIGRlZnMgc29ydGVkIGFscGhhYmV0aWNhbGx5IGJ5IHRpdGxlXG4gICAgKi9cbiAgICBhcGkuZmluZElEQnlUaXRsZVN1YnN0ciA9IGZ1bmN0aW9uICh0aXRsZVN1YnN0cikge1xuICAgICAgLy9pbnB1dCB2YWxpZGF0aW9uXG4gICAgICBpZiAodHlwZW9mIHRpdGxlU3Vic3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmRJREJ5VGl0bGVTdWJzdHIgcmVxdWlyZXMgc3RyaW5nIGlucHV0Jyk7XG4gICAgICB9XG4gICAgICB2YXIgZm91bmRUaXRsZUlEID0gbnVsbDtcbiAgICAgIGRhdGEuZGVmcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGQudGl0bGUuaW5kZXhPZih0aXRsZVN1YnN0cik7XG4gICAgICAgIC8vaWYgaW5kZXggaXMgMCwgd2UgZm91bmQgYSBtYXRjaGluZyB0aXRsZVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBmb3VuZFRpdGxlSUQgPSBkLl9pZDtcbiAgICAgICAgICAvL2VuZCB0aGUgZm9yRWFjaCBsb29wXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZm91bmRUaXRsZUlEO1xuICAgIH07XG5cbiAgICByZXR1cm4gYXBpO1xuICB9KVxuOyIsIi8qZ2xvYmFsIGFuZ3VsYXIqL1xuXG5hbmd1bGFyLm1vZHVsZSgnbWVtcnknKVxuICAuZmFjdG9yeSgnZGVmU2VydmVyJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHJldHVybiB7XG4gICAgICBnZXRBbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2RlZnMnKTtcbiAgICAgIH0sXG5cbiAgICAgIGdldE9uZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZGVmcy8nICsgaWQpO1xuICAgICAgfSxcblxuICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2RlZnMnLCBkZWYpO1xuICAgICAgfSxcblxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5wdXQoJy9hcGkvZGVmcy8nICsgZGVmLl9pZCwgZGVmKTtcbiAgICAgIH0sXG5cbiAgICAgIGRlbGV0ZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUoJy9hcGkvZGVmcy8nICsgaWQpO1xuICAgICAgfVxuICAgIH07XG4gIH0pXG47Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9