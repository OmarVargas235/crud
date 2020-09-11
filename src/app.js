import './assets/styles/bootstrap.min.css';
import './assets/styles/sass/main.scss';
import { UI } from './ui';
import { Book } from './books';
import { Alert } from './alerts';
import { effectRipple } from './helper';

const ui = new UI();
const alert = new Alert();

ui.btnForm.addEventListener('click', e => {
	e.preventDefault();
	effectRipple(e);
	
	//Agregar libro a la lista
	const [title, author, sinopsis] = ui.inputsForm.map(input => input.value);
	const book = new Book(title, author, sinopsis);
	
	//Devuelve true si hay mas de un libro con el mismo titulo o sinopsis.
	const repeatBook = Array.from(ui.containerBook.children).some(el => (
		el.children[0].textContent === title + "." || el.children[2].textContent === sinopsis
	));

	if (title.trim() === '' || author.trim() === '' || sinopsis.trim() === '') {
		alert.alert(alert.createAlert(), 'alert-danger', 'Please insert data in all fields.');

		return;
	
	} else if (title.trim() === author.trim() || title.trim() === sinopsis.trim() 
		|| author.trim() === sinopsis.trim()) {//Si hay 2 campos con la misma data.
		alert.alert(alert.createAlert(), 'alert-info', 'Book attributes cannot be the same.');

		return;
	
	} else if (repeatBook) {
		alert.alert(alert.createAlert(), 'alert-warning', 'There cannot be two books with the same title or description.');

		return;	
	} 

	if (ui.btnForm.textContent === 'Update !') {
		alert.removeAlert();
		alert.alert(alert.createAlert(), 'alert-success', 'Successfully updated.');
		book.showUpdateBook(ui.getBookCard);
		book.clearInputsForm();
		
		return;
	}
	
	alert.removeAlert();
	alert.alert(alert.createAlert(), 'alert-success', 'Book added successfully.');
	book.saveBook();

	//Vaciando los inputs una vez se halla agregado el libro.
	book.clearInputsForm();
});

ui.containerBook.addEventListener('click', e => {
	const btn = e.target.name;
	const book = new Book();
	effectRipple(e);
	
	if (btn === 'delete') {
		book.deleteBook(e.target.parentNode);
		alert.alert(alert.createAlert(), 'alert-success', 'Book deleted successfully.');
	
	} else if (btn === 'update') {
		ui.setBookCard = e.target.parentNode;
		book.upDateBook(e.target.parentNode);
	}
});

//Cambiar el tema (dark|light) del crud
ui.getBtnToggle.addEventListener('click', () => {
	ui.getMain.classList.toggle('dark-mode');
	ui.getMain.classList.toggle('light-mode');
});