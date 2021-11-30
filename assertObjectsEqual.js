const eqObjects = function (object1, object2) {
  const keys = Object.keys(object1)
  if (keys.length !== Object.keys(object2).length) { 
    return false 
   
  }  
  for ( const key of keys ) {
  if (object1[key] !== object2[key]) {
    return false

  }
} 
return true;
  
};