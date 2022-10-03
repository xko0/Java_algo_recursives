/*const computeSquareRoot = (n, p) => {
  if ( n * n === p)
    return n;
  else 
    return computeSquareRoot(n - 1, p )
}

const computeSquareRootRec = (n) => {
  return computeSquareRoot(n, n)
}
console.log(computeSquareRootRec(81))
*/


const computeSquareRoot = (n) => {
  var searchLarge = 2
  while ( searchLarge * searchLarge < n) {
    searchLarge ++;
  }
  if (searchLarge * searchLarge === n) {
      return searchLarge;
  }
  else {
      return computeSquareRoot(n, (searchLarge + (n/searchLarge))*0.5);
  }
}

const verifEntry = (n) => {
  if (n > 0 && Number.isInteger(n))
    return computeSquareRoot(n)
  else
    return "Invalid Number batard !"
}
console.log(verifEntry(81))
