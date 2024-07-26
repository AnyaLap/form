const brandChoice = document.forms.form1.elements.brand;
const makeChoice = document.forms.form1.elements.make;
const fuelChoice = document.forms.form1.elements.fuel;
const ageChoice = document.forms.form1.elements.age;
const ownersChoice = document.forms.form1.elements.owners;
const paymentChoice = document.forms.form1.elements.payment;
const owners = document.querySelector('.owners-container');
const makes = Array.from(document.querySelectorAll('.make'));
const fuel = Array.from(document.querySelectorAll('.fuel'));
const engine = document.forms.form1.elements.engine;
const volume = document.querySelector('#volume');
const total = document.querySelector('#total');
const orderBrand = document.querySelector('#order_brand');
const orderMake = document.querySelector('#order_make');
const orderEngine = document.querySelector('#order_engine');
const orderFuel = document.querySelector('#order_fuel');
const orderAge = document.querySelector('#order_age');
const orderPayment = document.querySelector('#order_payment');

owners.style.display = 'none';

const priceInfo = {
	make: {
		CX30: 3750000,
		CX5: 3100000,
		CX60: 6863800,
		six: 3690000,
		rafale: 7600000,
		express: 3130000,
		megane: 4489000,
		arkana: 1078000,
		zafira: 3050000,
		grandland: 1310000,
		combo: 122000,
		vivaro: 650000,
		epace: 2145000,
		XE: 1395900,
		fpace: 2050000,
		XF: 745000,
	},
	fuel: {
		gasoline: 51.4,
		diesel: 58.3,
		gas: 22.49,
		electro: 20,
	},
};

let currentSet = {
	make: 'CX30',
	engine: 2,
	fuel: 'gasoline',
	getMakePrice() {
		return priceInfo.make[this.make];
	},
	getFuelPrice() {
		return priceInfo.fuel[this.fuel];
	},
};

// Функция для обновления списка моделей в зависимости от выбранной марки
const makeList = () => {
	switch (brandChoice.value) {
		case 'Renault':
			makeChoice.innerHTML =
				'<option class="make" value="rafale">Rafale</option><option class="make" value="express">Express</option><option class="make" value="megane">Megane E-Tech</option><option class="make" value="arkana">Arkana</option>';
			break;
		case 'Opel':
			makeChoice.innerHTML =
				'<option class="make" value="zafira">Zafira Life</option><option class="make" value="grandland">Grandland</option><option class="make" value="combo">Combo</option><option class="make" value="vivaro">Vivaro</option>';
			break;
		case 'Mazda':
			makeChoice.innerHTML =
				'<option class="make" value="CX30">CX-30</option><option class="make" value="CX5">CX-5</option><option class="make" value="CX60">CX-60</option><option class="make" value="six">6</option>';
			break;
		case 'Jaguar':
			makeChoice.innerHTML =
				'<option class="make" value="epace">E-Pace</option><option class="make" value="XE">XE</option><option class="make" value="fpace">F-Pace</option><option class="make" value="XF">XF</option>';
			break;
		default:
			makeChoice.innerHTML =
				'<option class="make" value="default">-модель-</option>';
	}
};

// Функция для обновления цены
const updatePrice = () => {
	let makePrice = currentSet.getMakePrice();
	let fuelPrice = currentSet.getFuelPrice();
	let totalPrice;
	if (paymentChoice.value === 'cash') {
		totalPrice = currentSet.engine * fuelPrice + makePrice;
	} else if (paymentChoice.value === 'card') {
		totalPrice = (currentSet.engine * fuelPrice + makePrice) * 0.9;
	} else {
		totalPrice =
			currentSet.engine * fuelPrice +
			makePrice +
			(currentSet.engine * fuelPrice + makePrice) * 0.03;
	}
	total.textContent = totalPrice.toFixed(2);
};

// Функция для обновления заказа
const orderUpdate = () => {
	orderBrand.textContent = brandChoice.value;
	orderMake.textContent = makeChoice.value;
	orderFuel.textContent = fuelChoice.value;
	orderEngine.textContent = engine.value + ' литра';
	orderAge.textContent = ageChoice.value;
	orderPayment.textContent = paymentChoice.value;
};

// Обработчики событий
brandChoice.addEventListener('change', () => {
	makeList();
	orderUpdate();
});

makeChoice.addEventListener('change', () => {
	currentSet.make = makeChoice.value;
	updatePrice();
	orderUpdate();
});

fuelChoice.forEach((el) => {
	el.addEventListener('change', (e) => {
		currentSet.fuel = e.target.value;
		updatePrice();
		orderUpdate();
	});
});

engine.addEventListener('input', () => {
	currentSet.engine = parseFloat(engine.value);
	volume.textContent = engine.value;
	updatePrice();
	orderUpdate();
});

ageChoice.forEach((el) => {
	el.addEventListener('change', () => {
		if (ageChoice.value === '3') {
			owners.style.display = 'block';
		} else {
			owners.style.display = 'none';
		}
		orderUpdate();
	});
});

paymentChoice.forEach((el) => {
	el.addEventListener('change', () => {
		updatePrice();
		orderUpdate();
	});
});

// Начальная настройка
makeList();
orderUpdate();
updatePrice();
