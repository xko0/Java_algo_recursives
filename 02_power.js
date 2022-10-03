const computePowerIt = (n, p) => {
  var result = 1
  for ( i = 1; i <= p; i++)
    result = result * n;
  return result;
}
//console.log(computePowerIt(5, 5))

const computePowerRec = (n, p) => {
  if (p === 0)
    return 1;
    else if (n ===0)
    return 0;
    else if (Number.isInteger(p) == false|| Number.isInteger(n) == false)
    return "Error, try positiv integer";
    else return n * computePowerRec(n, p - 1 );
}

const verifEntry = (n, p) => {
  if (n > 0 && Number.isInteger(n) &&  p > 0 && Number.isInteger(p))
    return computePowerRec(n, p)
  else
    return "Invalid Number batard !"
}

console.log(verifEntry(5, 5))