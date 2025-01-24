function squaredDigits(num) {
  const squaredArr = [...String(num)].map((digit) => digit * digit).join("");
  return Number(squaredArr);
}

console.log(squaredDigits(3212));
