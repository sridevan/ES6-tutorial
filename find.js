/*
Use 'find' to search for an object in a list
of objects that has a particular property
*/

var ladders = [
    {id: 1, height: 20},
  	{id: 2, height: 30},
    {id: 3, height: 25}
];

function findWhere(array, criteria) {
  var property = Object.keys(criteria)[0];
  return array.find(function(arr){
    return arr[property] === criteria[property];
   
  });
  
  
}

var lad = findWhere(ladders, {height: 30});

lad;