const _private = new WeakMap();

export class UI {
	constructor() {
		const properties = {
			_main: document.querySelector('#main'),
			_inputsBook: Array.from(document.querySelectorAll('.form-control')),
			_btnForm: document.querySelector('.btn-form'),
			_containerBook: document.querySelector('#container-books'),
			_btnToggle: document.querySelector('#button-toggle'),
			_bookCard: '',
		}

		_private.set(this, {properties});
	}
	
	get inputsForm() {
		return _private.get(this).properties['_inputsBook'];
	}

	get btnForm() {
		return _private.get(this).properties['_btnForm'];
	}

	get containerBook() {
		return _private.get(this).properties['_containerBook'];
	}

	get getBtnToggle() {
		return _private.get(this).properties['_btnToggle'];
	}

	get getMain() {
		return _private.get(this).properties['_main'];
	}

	get getBookCard() {
		return _private.get(this).properties['_bookCard'];
	}

	set setBookCard(getValue) {
		return _private.get(this).properties['_bookCard'] = getValue;
	}
}