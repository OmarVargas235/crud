import { UI } from './ui';

const _private = new WeakMap(); 

export class Book extends UI {
	constructor(title, author, sinopsis) {
		super();

		const properties = {
			_book: title,
			_author: author,
			_sinopsis: sinopsis,
		}

		_private.set(this, {properties});
	}

	get getBook() {
		return _private.get(this).properties['_book'];
	}

	get getAuthor() {
		return _private.get(this).properties['_author'];
	}

	get getSinopsis() {
		return _private.get(this).properties['_sinopsis'];
	}

	saveBook() {
		const div = document.createElement('div');
		div.classList.add('card-tasks', 'p-4', 'mb-3');

		const templete = `
            <h5 class="text-capitalize">${this.getBook.toLowerCase()}.</h5>
            <p class="task__subtitle text-capitalize">${this.getAuthor.toLowerCase()}.</p>

            <p>${this.getSinopsis}</p>

            <button class="btn btn-danger mb-1" name="delete">Delate book</button>
             <button class="btn btn-update mb-1" name="update">Update book</button>
		`;
		
		div.innerHTML = templete;
		this.containerBook.appendChild(div);
	}

	upDateBook(elements) {
		const convertArr = Array.from(elements.children);
		const [titleSet, authorSet, sinopsisSet] = this.inputsForm.map(input => input);
		const [title, author, sinopsis] = convertArr.map(input => input);
		
		//Colola la informacion del libro en los inputs del formulario, para poder editarlo.
		titleSet.value = title.textContent;
		authorSet.value = author.textContent;
		sinopsisSet.value = sinopsis.textContent;
		this.btnForm.textContent = "Update !";
	}

	showUpdateBook(elementsEdit) {
		const convertArr = Array.from(elementsEdit.children);
		const [title, author, sinopsis] = convertArr.map(input => input);
		
		//Muestra por pantalla la informacion editada.
		title.textContent = this.getBook;
		author.textContent = this.getAuthor;
		sinopsis.textContent = this.getSinopsis;
		this.btnForm.textContent = "Save !";
	}

	deleteBook(element) {
		element.remove();
		this.clearInputsForm();
		this.btnForm.textContent = "Save !";
	}

	clearInputsForm() {
		this.inputsForm.forEach(input => input.value = '');
	}
}