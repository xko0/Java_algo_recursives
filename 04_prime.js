const isPrimeNumberRec = (n, div = 3) => {
  if (n === 2)
    return true;
  if ( n < 2 || n % 2 === 0)
    return false;
  if (div * div > n)
    return true;
  if (n % div === 0)
    return false;
  return isPrimeNumberRec(n, div +2);
}
//console.log(isPrimeNumberRec(57))

const nextPrimeRec = (n) => {
  if (isPrimeNumberRec(n))
    return (n)
  return nextPrimeRec(n + 1) 
}

const verifEntry = (n) => {
  if (n > 0 && Number.isInteger(n))
    return nextPrimeRec(n)
  else
  return "Invalid Number batard !"
}

console.log(verifEntry(34))
