const _private = new WeakMap(); 

export class Alert {
	constructor() {
		const properties = {
			_container: document.querySelector('#container-form-tasks'),
		}

		_private.set(this, {properties});
	}

	get container() {
		return _private.get(this).properties['_container'];
	}

	createAlert() {
		const div = document.createElement('div');
 		div.classList.add('alert', 'col-10', 'col-md-12');

		return div;
	}

	alert(div, classe, message) {
		//Verificando que no halla un "alert".
		const isAlert = this.container.children[0].getAttribute('class').split(' ')[0] === 'alert';
		isAlert && this.removeAlert(); //Si anteriormente hay un alert lo elimina del DOM.

		classe === 'alert-success' && setTimeout(() => this.removeAlert(), 1300);
		
		//Añade el alert al DOM.
		div.classList.add(classe);
		div.textContent = message;
		this.container.prepend(div);
	}

	removeAlert() {
		const removeDiv = document.querySelector('.alert');
		removeDiv !== null && this.container.removeChild(removeDiv);
	}
}