"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b ** 2) - (4 * a * c);
  if (d === 0) {
    arr =[-b / (2 * a)];
  } else if (d > 0) {
    arr =[(-b + Math.sqrt(d) )/(2 * a), (-b - Math.sqrt(d) )/(2 * a)];
  } else {
    arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (percent > 0) {
    percent = +percent;
  } else if (percent === 0 || percent !== 0) {
    return false;
  }

  if (contribution >= 0) {
    contribution = +contribution;
  } else if (contribution !== 0) {
    return false;
  }

  if (amount >= 0) {
    amount = +amount;
  } else if (amount !== 0) {
    return false;
  }

  let bodyLoan = amount - contribution; // тело кредита
  percent = percent / 1200;
  let monthlyFee = bodyLoan * (percent + percent/(((1 + percent) ** countMonths) - 1)); // ежемесячный платеж
  let totalAmount = monthlyFee * countMonths; // общая сумма к возврату
  return +totalAmount.toFixed(2);
}