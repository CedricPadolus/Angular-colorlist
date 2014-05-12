var colorApp = angular.module('colorApp', []);

colorApp.controller('ColorListCtrl', function ($scope) {
  $scope.colors = [
	  {
	'id': '0',
	'name': 'Black',
	"imageUrl": "img/color/black.jpg",
     'hex': '#000000',
	 'decimal' : '0,0,0'
	  },
    {
	'id': '1',
	'name': 'Silver',
	"imageUrl": "img/color/silver.jpg",
     'hex': '#C0C0C0',
	 'decimal' : '192,192,192'
	  },
	  
    {
	'id': '2',
	'name': 'Gray',
	"imageUrl": "img/color/gray.jpg",
     'hex': '#808080',
	 'decimal' : '128,128,128'
	  },
	 
    {	
	'id': '3',
	'name': 'White',
	"imageUrl": "img/color/white.jpg",
     'hex': '#FFFFFF',
	 'decimal' : '255,255,255'
	 },
	 
	{	
	'id': '4',
	'name': 'Maroon',
	"imageUrl": "img/color/maroon.jpg",
     'hex': '#800000',
	 'decimal' : '128,0,0'
	 },
	 
	 	{	
	'id': '5',
	'name': 'Red',
	"imageUrl": "img/color/red.jpg",
     'hex': '#FF0000',
	 'decimal' : '255,0,0'
	 },
	 
	 {	
	'id': '6',
	'name': 'Purple',
	"imageUrl": "img/color/purple.jpg",
     'hex': '#800080',
	 'decimal' : '128,0,128'
	 },
	 {	
	'id': '7',
	'name': 'Fuschia',
	"imageUrl": "img/color/fuschia.jpg",
     'hex': '#FF00FF',
	 'decimal' : '255,0,255'
	 },
	  {	
	'id': '8',
	'name': 'Green',
	"imageUrl": "img/color/green.jpg",
     'hex': '#008000',
	 'decimal' : '0,128,0'
	 },
	   {	
	'id': '9',
	'name': 'Lime',
	"imageUrl": "img/color/lime.jpg",
     'hex': '#00FF00',
	 'decimal' : '0,255,0'
	 },
	    {	
	'id': '10',
	'name': 'Olive',
	"imageUrl": "img/color/olive.jpg",
     'hex': '#808000',
	 'decimal' : '128,128,0'
	 },
	     {	
	'id': '11',
	'name': 'Yellow',
	"imageUrl": "img/color/yellow.jpg",
     'hex': '#FFFF00',
	 'decimal' : '255,255,0'
	 },
	      {	
	'id': '12',
	'name': 'Navy',
	"imageUrl": "img/color/navy.jpg",
     'hex': '#000080',
	 'decimal' : '0,0,128'
	 },
	       {	
	'id': '13',
	'name': 'Blue',
	"imageUrl": "img/color/blue.jpg",
     'hex': '#0000FF',
	 'decimal' : '0,0,255'
	 },
	 	       {	
	'id': '13',
	'name': 'Teal',
	"imageUrl": "img/color/teal.jpg",
     'hex': '#008080',
	 'decimal' : '0,128,128'
	 },
	  	       {	
	'id': '13',
	'name': 'Aqua',
	"imageUrl": "img/color/aqua.jpg",
     'hex': '#00FFFF',
	 'decimal' : '0,255,255'
	 }
  ];
});