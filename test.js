// // Обработчик события input для поля Имя
// nameInput.addEventListener('input', function () {
//     const nameValue = nameInput.value;
//     const nameRegex = /^[a-zA-Zа-яА-Я" "]{2,20}$/;
  
//     if (nameRegex.test(nameValue)) {
//       // Если email соответствует формату, убираем сообщение об ошибке
//       errorName.textContent = '';
//     } else {
//       // Если email не соответствует формату, показываем сообщение об ошибке
//       errorName.textContent = 'Имя указано некорректно';
//     }
//   });

// // Обработчик события input для поля email
// emailInput.addEventListener('input', function () {
//   const emailValue = emailInput.value;
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   if (emailRegex.test(emailValue)) {
//     // Если email соответствует формату, убираем сообщение об ошибке
//     errorEmail.textContent = '';
//   } else {
//     // Если email не соответствует формату, показываем сообщение об ошибке
//     errorEmail.textContent = 'Почта указана некорректно';
//   }
// });

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     let isValid = true;
    
//     if (nameInput.value.trim() === '') {
//       nameError.textContent = 'Name is required';
//       isValid = false;
//     } else {
//       nameError.textContent = '';
//     }
    
//     if (emailInput.value.trim() === '') {
//       emailError.textContent = 'Email is required';
//       isValid = false;
//     } else {
//       emailError.textContent = '';
//     }
    
//     if (!yourCheck.checked) {
//       agreeError.textContent = '';
//       isValid = false;
//     } else {
//       agreeError.textContent = '';
//     }
    
//     if (isValid) {
//       console.log(`Name: ${nameInput.value}`);
//       console.log(`Email: ${emailInput.value}`);
      
//       form.reset();
//     }
    
//     submitBtn.disabled = !isValid;
//   });
