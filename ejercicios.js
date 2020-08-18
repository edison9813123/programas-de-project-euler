function multiplo() {
    var sum = 0;
    var n = 1000;

    while (n--) {
      if (n % 3 === 0 || n % 5 === 0) {
        sum += n;
      }
    }
    console.log(sum);
    return sum;
  }


  function fibonacci() {
    var fib = [1, 2];
    var sum = 0;
  
    function calc(arr) {
      return arr[arr.length - 1] + arr[arr.length - 2];
    }
  
    while (fib[fib.length - 1] < 4e+6) {
      fib.push(calc(fib));
    }
  
    fib.forEach(function (n) {
      if (n % 2 === 0) {
        sum += n;
      }
    });
  
    console.log(sum);
    return sum;
  };



  function factor() {
    // starting index (first prime)
    var i = 2;
    var num = 600851475143;
  
    while (num > i) {
      if (num % i === 0) {
        num = num / i;
      }
  
      i++;
    }
  
    console.log(i);
    return i;
  };
  
  function palindromo() {
    // start with the largest number from two 3-digit numbers
    var n = 999 * 999;
    var nStr;
    var nStrReversed;
    var sqrt;
    var divisor;
  
    while (n > 100000) {
      
      nStr = n + '';
      
      nStrReversed = nStr.split('').reverse().join('');
  
      // if they are identical, then n is a palindrome
      if (nStr === nStrReversed) {
        
        sqrt = Math.sqrt(n);
        
        divisor = Math.floor(sqrt);
  
        
        while (n % divisor !== 0 && divisor >= 100 && n / divisor <= 999) {
          
          divisor--;
        }
  
        
        if (n % divisor === 0 && divisor >= 100 && n / divisor <= 999) {
          // return the answer
          console.log(n);
          return n;
        }
      }
  
      n--;
    }
  };


  function multiplos() {
    var n = 0;
    var i = 1;
    var maxDivisor = 20;
    var found = false;
  
    while (found === false) {
      // increments of largest integer divisor
      n += maxDivisor;
  
      // while n is divisible by i
      // and i is less than the largest divisor
      while (n % i === 0 && i <= maxDivisor) {
        // if i is equal to the largest divisor
        if (i === maxDivisor) {
          // then we've found the answer
          found = true;
        }
        i++;
      }
  
      // reset the index is n is not divisible by i
      i = 1;
    }
  
    console.log(n);
    return n;
  };


  function diferencia() {
    var max = 100;
    var x = 0;
    var y = 0;
    var i = 0;
    var j = 0;
  
    (function sumOfSquares() {
      while (i <= max) {
        x += Math.pow(i, 2);
        i++;
      }
      return x;
    }());
  
    (function squareOfSums() {
      while (j <= max) {
        y += j;
        j++;
      }
      y = Math.pow(y, 2);
      return y;
    }());
  
    console.log(y - x);
    return y - x;
  };

  function primer() {
    var primes = [2];
    var i = 3;
    var j = 2;
    var maxPrimes = 10001;
  
    // while primes is less than the sought after number
    while (primes.length < maxPrimes) {
      // while i divided by j has a remainder,
      // indicating it could still be a prime
      while (i % j !== 0) {
        j++;
        // if we're reached the point where j === i,
        // then it must be a prime
        if ( j === i ) {
          primes.push(i);
          break;
        }
      }
  
      // otherwise, increment i and reset j;
      i++;
      j = 2;
    }
  
    console.log(primes[maxPrimes - 1]);
    return primes[maxPrimes - 1];
  };

  function producto() {
    var digit = '73167176531330624919225119674426574742355349194934' +
                '96983520312774506326239578318016984801869478851843' +
                '85861560789112949495459501737958331952853208805511' +
                '12540698747158523863050715693290963295227443043557' +
                '66896648950445244523161731856403098711121722383113' +
                '62229893423380308135336276614282806444486645238749' +
                '30358907296290491560440772390713810515859307960866' +
                '70172427121883998797908792274921901699720888093776' +
                '65727333001053367881220235421809751254540594752243' +
                '52584907711670556013604839586446706324415722155397' +
                '53697817977846174064955149290862569321978468622482' +
                '83972241375657056057490261407972968652414535100474' +
                '82166370484403199890008895243450658541227588666881' +
                '16427171479924442928230863465674813919123162824586' +
                '17866458359124566529476545682848912883142607690042' +
                '24219022671055626321111109370544217506941658960408' +
                '07198403850962455444362981230987879927244284909188' +
                '84580156166097919133875499200524063689912560717606' +
                '05886116467109405077541002256983155200055935729725' +
                '71636269561882670428252483600823257530420752963450';
    var i = 0;
    var endPoint = digit.length - 5;
    var greatestProduct = 0;
    var temp;
  
    while (i <= endPoint) {
      temp = digit[i] * digit[i + 1] * digit[i + 2] * digit[i + 3] * digit[i + 4];
      if (temp > greatestProduct) {
        greatestProduct = temp;
      }
      i++;
    }
  
    console.log(greatestProduct);
    return greatestProduct;
  };

  function pitagorico() {
    var a = 1;
    var b = a + 1;
    var c;
  
    while (a < 1000) {
      while (b < 1000 && b > a) {
        c = 1000 - a - b;
        if (c < b) {
          break;
        }
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
          console.log(a * b * c);
          return a * b * c;
        }
        b++;
      }
      a++;
      b = a + 1;
    }
  };

  function suma() {
    var maxPrimeValue = 2e+6;
    var i = maxPrimeValue;
    var sum = 0;
  
    // while primes is less than the sought after number
    while (i >= 2) {
      if (isPrime(i) === true) {
        sum += i;
      }
  
      i--;
    }
  
    function isPrime(n) {
      var x = Math.floor(Math.sqrt(n));
      var j = x;
  
      while (j >= 2) {
        if (n % j === 0) {
          return false;
        }
        j--;
      }
  
      return true;
    }
  
    console.log(sum);
    return sum;
  };


  module.exports={multiplo,fibonacci,factor,palindromo,multiplos,diferencia,primer,producto,pitagorico,suma}
  