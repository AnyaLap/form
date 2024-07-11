const form = document.forms.formReg;
const nameInput = form.elements.yourName;
const emailInput = form.elements.yourEmail;
const yourCheck =  form.elements.yourReg;
const submitBtn = form.elements.yourBtn;

const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorCheck = document.getElementById('errorCheck');
const errorPassword = document.getElementById('errorPassword');

//Добавлена обработка события изменения для чек 

yourCheck.addEventListener('change',function(){
  //Кнопка отправки активируется только если чекбокс отмечен
  submitBtn.disabled = !this.checked;
});

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    const nameValue = nameInput.value;
    const nameRegex = /^[a-zA-Zа-яА-Я\s]{2,20}$/;
  
    if (nameRegex.test(nameValue)) {
      // Если имя соответствует формату, убираем сообщение об ошибке
      errorName.textContent = '';
    } else {
      // Если имя не соответствует формату, показываем сообщение об ошибке
      errorName.textContent = 'Имя указано некорректно';
      isValid = false;
    }

    const emailValue = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (emailRegex.test(emailValue)) {
      // Если email соответствует формату, убираем сообщение об ошибке
      errorEmail.textContent = '';
    } else {
      // Если email не соответствует формату, показываем сообщение об ошибке
      errorEmail.textContent = 'Почта указана некорректно';
      isValid = false;
    }

    //Добавлена проверка пароля
    const passwordValue = form.elements.yourPassword.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (passwordRegex.test(passwordValue)) {
      // Если пароль соответствует формату, убираем сообщение об ошибке
      errorPassword.textContent = '';
    } else {
      // Если пароль не соответствует формату, показываем сообщение об ошибке
      errorPassword.textContent = 'Пароль должен содержать не менее 8 символов, включая заглавные и строчные буквы и цифры';
      isValid = false;
    }

    if (isValid) {
        console.log(`Name: ${nameValue}`);
        console.log(`Email: ${emailValue}`);
            
        form.reset();
      //Кнопка отправки отключается после успешного отправления формы 
      submitBtn.disabled = true;
    }
  });

  //Обработчики событий focus и blur
const inputFields = document.querySelectorAll('.form__input');

inputFields.forEach(function(input) {
  input.addEventListener('focus', function () {
    input.style.border = '1px solid rgb(141, 245, 120)'; //Изменение границы при фокусе
    input.style.backgroundColor = 'rgb(141, 245, 120)';//Изменение фона при фокусе
  });

  input.addEventListener('blur', function () {
    input.style.border = ''; //Восстановление стандартной границы после потери фокуса
    input.style.backgroundColor = ''; //Восстановление стандартного фона после потери фокуса
  });
});