"use strict";

window.addEventListener('DOMContentLoaded', () => {

	// Header Mobile Menu

	const body = document.querySelector('body'),
		  menu = document.querySelector('.header__menu'),
		  btnBurger = document.querySelector('.header__burger');

	function openMenu() {
		btnBurger.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	}

	function closeMenu() {
		btnBurger.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');
	}

	btnBurger.addEventListener('click', openMenu);
	menu.addEventListener('click', closeMenu);

});