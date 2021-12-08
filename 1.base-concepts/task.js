"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4*a*c;
  console.log(discriminant);

   if(discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
   } else if(discriminant === 0) {
    arr.push(-b/(2*a));
   } 

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  //тесты

  if(isNaN(percent)) {
     totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
     return totalAmount;
  } else if(isNaN(contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return totalAmount;
  } else if(isNaN(amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return totalAmount;
  }


  let monthlyPay;
  let interestRate = percent/100;
  let interestRatePerMonth = interestRate / 12;
  let creditBody = amount - contribution;

  let currentDate = new Date();
  console.log(currentDate);
  let amountOfMonths = (date.getFullYear() - currentDate.getFullYear())*12 - (currentDate.getMonth()) + date.getMonth();
  console.log(amountOfMonths);



  //Платеж = S * (P + (P / (((1 + P)^n) - 1))), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень


  monthlyPay = creditBody * (interestRatePerMonth + (interestRatePerMonth / ((Math.pow(1 + interestRatePerMonth, amountOfMonths) - 1))));
  totalAmount = (monthlyPay * amountOfMonths).toFixed(2);

  return parseFloat(totalAmount);
}
