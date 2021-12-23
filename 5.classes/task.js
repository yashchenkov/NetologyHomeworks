class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5 >=100 ? 100 : this.state * 1.5;
	}

	set state(state) {
		if(state <= 0) {
			this._state = 0;
		} else if(state >= 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
		
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
		
	}
}


class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
		
	}
}


class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
		
	}
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	findBookBy(type, value) {
		let book = this.books.find(elem => elem[type] === value);
		if (book === undefined) {
			return null;
		} else {
			return book;
		}
	}

	giveBookByName(bookName) {
		let bookIndex = this.books.findIndex(elem => elem.name === bookName);
		if(bookIndex === -1) {
			return null;
		} else {
			let book = this.books.splice(bookIndex, 1);
			return book[0];
		}
	}
}





class Student {
	constructor(name) {
		this.name = name;
		this.subjects = {};
	}

	addMark(grade, subject) {
		if(grade < 1 || grade > 5) {
			console.log("Ошибка, оценка должна быть числом от 1 до 5");
		} else {
			if(this.subjects[subject] === undefined) {
				this.subjects[subject] = [];
				this.subjects[subject].push(grade);
			} else {
				this.subjects[subject].push(grade);
			}
		}
	}

	getAverageBySubject(subject) {
		if(this.subjects[subject] !== undefined) {
			let sum = 0;
  			this.subjects[subject].forEach(item => sum += item);

  			console.log(`Средний балл по предмету ${subject} ` + sum / this.subjects[subject].length);
  			return sum / this.subjects[subject].length;
		} else {
			console.log("Несуществующий предмет");
		}
	}

	getAverage() {
		let finalArr = [];
		let entriesOfSubjects = Object.entries(this.subjects);

		let helperArr = entriesOfSubjects.map(arr => {
			for(let i = 1; i < arr.length; i++) {
				return arr[i];
			}
		});

		helperArr.forEach(elem => finalArr = finalArr.concat(elem));

		let sum = 0;
		finalArr.forEach(elem => {
			sum += elem
		});

		console.log('Средний балл по всем предметам ' + sum / finalArr.length);
		return sum / finalArr.length;
	}
}

let student = new Student('nana');
student.addMark(5, 'algebra');
student.addMark(3, 'algebra');


student.addMark(5, 'geometry');
student.addMark(2, 'geometry');
student.addMark(3, 'geometry');
student.addMark(5, 'geometry');
student.addMark(5, 'geometry');

console.log(student);

student.getAverageBySubject('algebra');
student.getAverageBySubject('geometry');
student.getAverageBySubject('biology');

student.getAverage();


