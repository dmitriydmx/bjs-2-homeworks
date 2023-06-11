function parseCount (quantity) {
    let parseResult = Number.parseFloat(quantity);
    if (Number.isNaN(parseResult)) {
    throw new Error("Невалидное значение");
  } 
  return parseResult;
}

function validateCount (quantity) {    
    try {
      if (parseCount(quantity)) {
        return parseCount(quantity);
      };   
    } catch (error) {
       return error 
    }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.p = (a +b + c) / 2;
    if(a > b +c || b > a + c || c > a + b) {
        throw new Error ("Треугольник с такими сторонами не существует");
    }
  } 

  get perimeter() {
    return (this.a + this.b + this.c);    
  }
  
  get area() {
    return +(Math.sqrt(this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c))).toFixed(3);
  }
}

function getTriangle (a, b, c) {
  try {
    return new Triangle(a, b, c);
  } 
  catch (error) {
    return {
      get perimeter(){
        return "Ошибка! Треугольник не существует"
      },
      get area(){
        return "Ошибка! Треугольник не существует"
      }
    }
  }
}