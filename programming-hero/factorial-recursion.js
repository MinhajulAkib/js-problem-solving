function factorial(n){
    // if number is 0
      if (n==0 || n==1){
          return 1;
      }
      // if number is positive
      return n * factorial(n-1);
}
console.log(factorial(4));