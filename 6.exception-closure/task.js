function parseCount(data) {
	let parsed = Number.parseInt(data);
	if(isNaN(parsed)) {
		throw new Error("Невалидное значение");
	}
	return parsed;

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
		let p = this.getPerimeter()/2;
		let s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
		return Number.parseFloat(s.toFixed(3));
	}

}

function getTriangle(a,b,c) {
	try {
		return new Triangle(a,b,c);
	} catch(err) {
		return {
			getArea: function() {return 'Ошибка! Треугольник не существует';},
			getPerimeter: function() {return 'Ошибка! Треугольник не существует';}
		}};
	}


