const header = () => {
	const mainMenu = document.querySelector('.main-menu');
	const menuOpenButton = document.querySelector('.menu-button_open');
	const menuCloseButton = document.querySelector('.menu-button_close');

	let openCloseTimeout;

	function openMenu(event) {
		event.stopPropagation();
		if (!mainMenu.classList.contains('main-menu_open')) {
			clearTimeout(openCloseTimeout);
			mainMenu.classList.remove('main-menu_close');
			openCloseTimeout = setTimeout(() => mainMenu.classList.add('main-menu_open'), 0);
		}
	}

	function closeMenu() {
		if (mainMenu.classList.contains('main-menu_open')) {
			clearTimeout(openCloseTimeout);
			mainMenu.classList.remove('main-menu_open');
			openCloseTimeout = setTimeout(() => mainMenu.classList.add('main-menu_close'), 1000);
		}
	}

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape') {
			closeMenu();
		}
	});

	document.addEventListener('click', (event) => {
		if (!mainMenu.contains(event.target)) {
			closeMenu();
		}
	});

	menuOpenButton.addEventListener('click', openMenu);
	menuCloseButton.addEventListener('click', closeMenu);
};

export default header;
