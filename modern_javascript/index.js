let a = [1,2,3,4,5]

a.reduce(function(prev, value){return prev + value}, 0) // 15
console.log(a);
a.reduce(function(prev, value){return prev + value}) // 15
console.log(a);
