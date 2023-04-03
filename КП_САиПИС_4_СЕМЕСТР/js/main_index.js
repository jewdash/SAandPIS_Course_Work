const language_switcher = document.querySelector("#language__selection");
const language_arr = ['ru', 'by', 'en'];

language_switcher.addEventListener('change', changeUrlLanguage);

//Перенаправить на url с указанием языка
function changeUrlLanguage() {
	let lang = language_switcher.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

let hash;
function changeLanguage() {
	hash = window.location.hash;
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

	for (let key in languageArray) {
		let element = document.querySelector('.lang_' + key);
		if (element) {
			element.innerHTML = languageArray[key][hash];
		}
	}
}

changeLanguage();

document.querySelector(".navlink_0").innerHTML = 
"<a class=\"lang_navbar__item_1\" href=\"/html/index.html#" + hash +"\">" +
languageArray['navbar__item_1'][hash] + "</a>";

document.querySelector(".navlink_1").innerHTML = 
"<a class=\"lang_navbar__item_2\" href=\"/html/index_news.html#" + hash +"\">" +
languageArray['navbar__item_2'][hash] + "</a>";

document.querySelector(".navlink_2").innerHTML = 
"<a class=\"lang_navbar__item_3\" href=\"/html/index_lore.html#" + hash +"\">" +
languageArray['navbar__item_3'][hash] + "</a>";

document.querySelector(".navlink_3").innerHTML = 
"<a class=\"lang_navbar__item_4\" href=\"/html/index_calc.html#" + hash +"\">" +
languageArray['navbar__item_4'][hash] + "</a>";

document.querySelector(".navlink_4").innerHTML = 
"<a class=\"lang_navbar__item_5\" href=\"/html/index_workers.html#" + hash +"\">" +
languageArray['navbar__item_5'][hash] + "</a>";

document.querySelector(".navlink_5").innerHTML = 
"<a class=\"lang_navbar__item_6\">" + languageArray['navbar__item_6'][hash] +"</a>";