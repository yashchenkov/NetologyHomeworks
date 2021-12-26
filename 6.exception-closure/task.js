function parseCount(data) {
	if(isNaN(Number.parseInt(data))) {
		throw new Error("Невалидное значение");
	} else {
		return Number.parseInt(data);
	}
}

function validateCount(data) {
	try {
		return parseCount(data);
	} catch(err) {
		return err;
	}
}


class Triangle {
	constructor(a,b,c) {
		if((a + b) > c && (b + c) > a && (c + a) > b) {
			this.a = a;
			this.b = b;
			this.c = c;
		} else {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		let p = (this.a+this.b+this.c)/2;
		let s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
		return Number.parseFloat(s.toFixed(3));
	}

}

function getTriangle(a,b,c) {
	try {
		return new Triangle(a,b,c);
	} catch(err) {
		let obj = {
			getArea: function() {console.error('Ошибка! Треугольник не существует');},
			getPerimeter: function() {console.error('Ошибка! Треугольник не существует')}
		}
		return obj;
	}
}