function makeRSA(p, q) {
    if (!Number.isInteger(p) || !Number.isInteger(q)) {
      throw new Error('RSA key generation requires integer inputs.', {
        cause: { code: 'NonInteger', values: [p, q] },
      });
    }
    if (!areCoprime(p, q)) {
      throw new Error('RSA key generation requires two co-prime integers.', {
        cause: { code: 'NonCoprime', values: [p, q] },
      })
    }
    // rsa algorithm…
  }b


makeRSA(3,2)