// eslint-disable-next-line import/prefer-default-export
export const isEven = (n) => n % 2 === 0;

export const getRandomIntegerInRange = (min, max) => {
  const diff = max - min + 1;
  return () => Math.floor(Math.random() * diff) + min;
};

export const gcd = (x, y) => (x ? gcd(y % x, x) : y);

export const isPrime = (num) => {
  const boundary = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= boundary; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num >= 2;
};
