class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, func, id) {
		if (id === undefined) {
			throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
		} else if (this.alarmCollection.some(elem => elem.id === id)) {
			console.error('Будильник с таким id уже существует');
			return;
		}
		const objAlarm = {
			time: time,
			callback: func,
			id: id
		}
		this.alarmCollection.push(objAlarm);

	}

	removeClock(id) {
		let elemIndex; 
		this.alarmCollection.some((elem, index) => {
			if (elem.id === id) {
				elemIndex = index;
			}
		}
		);

		if(elemIndex !== undefined) {
			this.alarmCollection.splice(elemIndex, 1);
			return true;
		} else {
			return false;
		}
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().substring(0, 5);
	}

	start() {
		function checkClock(alarm) {
			if (new Date().toLocaleTimeString().substring(0, 5) === alarm.time) {
				alarm.callback;
			}
		}

		if (this.timerId === null) {
			this.timerId = setInterval(this.alarmCollection.forEach(checkClock, 1000));
		}

	}

	stop() {
		if(this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length);
		this.alarmCollection.forEach(elem => console.log(`Будильник №${elem.id} заведён на ${elem.time}`));
	}

	clearAlarms() {
		this.stop();
		while(this.alarmCollection.length) {
			this.alarmCollection.pop();
		}
	}
}

function testCase() {
	let alarm = new AlarmClock();

	alarm.addClock('23:58', () => console.log('Пора вставать'),1);
	alarm.addClock('23:59', () => { console.log('Вставатььь'); alarm.removeClock(2)},2);
	alarm.addClock('23:59', () => {
		console.log('Куропаточка');
		alarm.clearAlarms();
		alarm.printAlarms();
	},3);

}