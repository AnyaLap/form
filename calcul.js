 // Список моделей для каждой марки автомобиля
 const carModels = {
    Renault: ["Logan", "Sandero", "Kaptur", "Duster"],
    Opel: ["Astra", "Corsa", "Vectra", "Mokka"],
    Mazda: ["CX-5", "3", "6","CX-9"],
    Jaguar: ["F-Pace", "XFR", "XF","XJ"]
};

//Создаем динамический список моделей в зависимости от марки
function updateModels() {
  const selectedMake = document.getElementById("carBrand").value;
  const carModelSelect = document.getElementById("carModel");

    carModelSelect.innerHTML = ""; // Очищаем текущие модели

    carModels[selectedMake].forEach((model) => {
        const option = document.createElement('option');
        option.value = model;
        option.text = model;
        carModelSelect.appendChild(option);
    });
}

// Инициализируем список моделей
updateModels();

const carBrand = document.getElementById("carBrand");
const carModel = document.getElementById("carModel");
const carFuel = document.querySelectorAll("input[name='carFuel']");
const carCondition = document.querySelectorAll("input[name='carCondition']");
const carOwner = document.querySelectorAll("input[name='carOwner']");
const carPay = document.querySelectorAll("input[name='carPay']");
const volume = document.getElementById("volume");
const priceCar = document.getElementById("price");
const submit = document.getElementById("submit");

const calculatePrice = (event) => {

  event.preventDefault(); //Предотвращаем отправку формы

const selectedBrand = carBrand.value;
const selectedModel = carModel.value;
const selectedFuel = [...carFuel].find(item => item.checked)?.value||'petrolFuel';
const selectedVolume = volume.value;
const selectedCondition = [...carCondition].find(item => item.checked)?.value||'newCar';
const selectedOwner = [...carOwner].find(item => item.checked)?.value||'firstOwner';
const selectedPay = [...carPay].find(item => item.checked)?.value||'payCash';
 
  let basePrice = 200000;
  let totalPrice = basePrice;

  if (selectedBrand === "Renault") {
      totalPrice += 50000;
  } else if(selectedBrand === "Opel") {
      totalPrice += 100000;
  } else if(selectedBrand === "Mazda") {
      totalPrice += 300000;
  } else if(selectedBrand === "Jaguar") {
    totalPrice += 200000;
  }
  if (selectedModel === "Logan"||selectedModel === "Vectra"||selectedModel === "3"||selectedModel === "XF") {
    totalPrice += 50000;
  } else if(selectedModel === "Sandero"||selectedModel === "Corsa"||selectedModel === "6"||selectedModel === "XFR") {
    totalPrice += 100000;
  } else if(selectedModel === "Duster"||selectedModel === "Astra"||selectedModel === "CX-5"||selectedModel === "XJ") {
    totalPrice += 200000;
  } else if(selectedModel === "Kaptur"||selectedModel === "Mokka"||selectedModel === "CX-9"||selectedModel === "F-Pace") {
  totalPrice += 150000;
  }

  if (selectedFuel === "electricFuel") {
      totalPrice += 50000;
  } else {
      totalPrice += 20000;
  }

  if (selectedVolume > 2.0) {
      totalPrice += 100000;
  } else {
      totalPrice += 50000;
  }

  if (selectedCondition === "usedCar") {
      totalPrice -= 30000;
  }

  if (selectedOwner === "secondOwner") {
      totalPrice -= 20000;
  }

  if (selectedPay === "payCard") {
      totalPrice += 10000;
  }
  
  priceCar.textContent = totalPrice;
};
submit.addEventListener('click', calculatePrice);

//Обновляем цену при изменении любого элемента формы
const elements = [carBrand, carModel, ...carFuel, volume, ...carCondition, ...carOwner, ...carPay];

elements.forEach(element => {
  element.addEventListener('change', calculatePrice);
});

//   //Обработчики событий focus и blur
  const inputFields = document.querySelectorAll('.form__select, .form__input');

  inputFields.forEach(function(input) {
    input.addEventListener('focus', function () {
    input.style.border = '2px solid rgb(141, 245, 120)'; //Изменение границы при фокусе
    input.style.backgroundColor = 'rgb(141, 245, 120)';//Изменение фона при фокусе
    });
  
    input.addEventListener('blur', function () {
    input.style.border = ''; //Восстановление стандартной границы после потери фокуса
    input.style.backgroundColor = ''; //Восстановление стандартного фона после потери фокуса
    });
  });