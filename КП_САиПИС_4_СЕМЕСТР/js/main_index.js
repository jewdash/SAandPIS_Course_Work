const language_switcher = document.querySelector("#language__selection");
const language_arr = ['ru', 'by', 'en'];

language_switcher.addEventListener('change', changeUrlLanguage);

//Перенаправить на url с указанием языка
function changeUrlLanguage() {
	let lang = language_switcher.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substring(1);
	if (!language_arr.includes(hash)) {
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	language_switcher.value = hash;

	// document.querySelector('title').innerHTML = MainLanguageArray['super_title'][hash];
	// for (let i = 1; i <= 4; i++) {
	// 	document.querySelector('.lang_title_' + i).innerHTML = MainLanguageArray['title_' + i][hash];
	// }

	for (let key in MainLanguageArray) {
		let element = document.querySelector('.lang_' + key);
		if (element) {
			element.innerHTML = MainLanguageArray[key][hash];
		}
	}
}

changeLanguage();