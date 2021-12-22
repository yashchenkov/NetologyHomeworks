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
		if(book instanceof Book || book instanceof Magazine) {
			this.books.push(book);
		}
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
			return book;
		}
	}
}

