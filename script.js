//flaga pomagaja określić czy ma mieć miejsce dane zdarzenie czy nie
//domyślnie na false aby samo wjechanie myszką nie pozwalaó rysować
let active = false;
//e nazwa zmiennej przechowującej ten obiekt w środku
const draw = function(e) {
	//sprawdzamy czy flaga jest na true czy false, domyślenie chcemy na false a jęsli jest false to nie rysuj 
	//return zatrzymuje funkcje  
	if (active == false) return;
	//w jakim dokładnie położyniu na osi x/y następił ruch myszką
	const x = e.clientX;
	const y = e.clientY;
	//tworzymy div, któremu nadamy takie paramtery, gdzie ma się znajdować
	const div = document.createElement('div');
	//obiekt style przechowuje rózne właściwości, np informacje o kolorze, font-size itp
	div.style.top = y + 'px';
	div.style.left = x + 'px';
	//appendChild--> dodawanie dziecka (na końcu body)  
	document.body.appendChild(div);
}
const drawActive = function() {
	//zmieni nam wartość 
	active = !active;
}
//draw()--> nie wywołujemy jej tutaj, ponieważ będzie wywoływana po każdym ruchu myszką 
document.body.addEventListener('mousemove', draw);
document.body.addEventListener('mousedown', drawActive);
document.body.addEventListener('mouseup', drawActive)