const header = () => {
	const mainMenu = document.querySelector('.main-menu');
	const menuToggleButton = document.querySelector('.menu-button');

	let openCloseTimeout;

	function menuToggle(setOpen) {
		if (!setOpen || menuToggleButton.classList.contains('menu-button_close')) {
			menuToggleButton.textContent = 'menu';
			menuToggleButton.classList.remove('menu-button_close');
			menuToggleButton.classList.add('menu-button_open');

			clearTimeout(openCloseTimeout);
			mainMenu.classList.remove('main-menu_open');
			openCloseTimeout = setTimeout(() => mainMenu.classList.add('main-menu_close'), 1000);
		} else {
			menuToggleButton.textContent = 'close';
			menuToggleButton.classList.remove('menu-button_open');
			menuToggleButton.classList.add('menu-button_close');

			clearTimeout(openCloseTimeout);
			mainMenu.classList.remove('main-menu_close');
			openCloseTimeout = setTimeout(() => mainMenu.classList.add('main-menu_open'), 0);
		}
	}

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape') {
			menuToggle(false);
		}
	});

	document.addEventListener('click', (event) => {
		if (!mainMenu.contains(event.target) && !menuToggleButton.contains(event.target)) {
			menuToggle(false);
		}
	});

	menuToggleButton.addEventListener('click', menuToggle);
};

export default header;
