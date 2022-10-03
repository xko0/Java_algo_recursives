const computeFactorIt = (n) => {
  var result = 1;
  for ( var i = 1; i <= n; i++ )
    result = result * i;
  return result;
}
//console.log(`result of factorial 5 is: ${computeFactorIt(5)}`)

const computeFactorialRec = (n) => {
  if(n === 0)
    return 1;
    else return n * computeFactorialRec(n - 1);
  }
//console.log(`result of factorial 5 is: ${computeFactorialRec(5)}`)

const verifEntry = (n) => {
  if (n > 0 && Number.isInteger(n))
    return computeFactorialRec(n)
  else
    return "Invalid Number batard !"
}

console.log(verifEntry(34))

