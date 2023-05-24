const navButton = document.getElementById('navButton');
const nav = document.getElementById('navLinks');

//set navigation height on mobile

navButton.addEventListener('click', () => {
	const visibility = nav.getAttribute('data-visible');
	if (visibility === 'false') {
		nav.setAttribute('data-visible', true);
		navButton.setAttribute('aria-expanded', true);
	} else {
		nav.setAttribute('data-visible', false);
		navButton.setAttribute('aria-expanded', false);
	}
});
