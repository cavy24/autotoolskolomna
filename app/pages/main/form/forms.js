function checkForm() {
  let btn_newsletter = document.getElementById('btn_footer_newsletter'),
  btn_form = document.getElementById('btn_footer_form'),
  userName, userEmail, userTel, userMessage,
  pcreName = new RegExp('^([a-z]|[а-яёА-ЯЁ]){3,15}(\s([a-z]|[а-яёА-ЯЁ]){3,15})?', 'i'),
  prceEmail = new RegExp('^.+@.+$'),
  prceTel = new RegExp('^[+]?[ ]?([0-9]+(\-| )?)+[0-9]+$');
  //^([+]?[ ]?([0-9]{1,3}[ |\-]?)+[0-9]+)$ [+]?[\s]?(\d+(\s|\-)?)+\d+
  btn_newsletter.addEventListener('click', () => {
  
  let nameNewsLetter = document.getElementById('input_footer_newsletter_name'),
  emailNewsLetter = document.getElementById('input_footer_newsletter_email');
  userName = nameNewsLetter.value;
  userEmail = emailNewsLetter.value;
    
    if(pcreName.test(userName) === false) {
		console.log('userName - NewsLetter false!');
		nameNewsLetter.value = '';
        nameNewsLetter.placeholder = 'Имя введено некорректно';
        nameNewsLetter.classList.add('class_error');
    }
    else {
		console.log('userName - NewsLetter true!');
		nameNewsLetter.classList.remove('class_error');
		nameNewsLetter.classList.add('class_success');
    };
    if(prceEmail.test(userEmail) === false) {
		console.log('userEmail - NewsLetter false!');
		emailNewsLetter.value = '';
      emailNewsLetter.placeholder = 'Почта введена некорректно';
      emailNewsLetter.classList.add('class_error');
    }
    else {
		console.log('userEmail - NewsLetter true!');
		emailNewsLetter.classList.remove('class_error');
		emailNewsLetter.classList.add('class_success');
    }

});
  
  btn_form.addEventListener('click', () => {
	  let nameForm = document.getElementById('input_footer_form_name'),
	  telForm = document.getElementById('input_footer_form_tel'),
    emailForm = document.getElementById('input_footer_form_email'),
    messageForm = document.getElementById('textarea_footer_form_message');
    userName = nameForm.value;
    userEmail = emailForm.value;
    userTel = telForm.value;
    userMessage = messageForm.value;
    console.log(userMessage);
	
	  if(pcreName.test(userName) === false) {
		  console.log('userName - Form false!');
		  nameForm.value = '';
      nameForm.placeholder = 'Имя введено некорректно';
      nameForm.classList.add('class_error');
    }
    else {
		  console.log('userName - Form true!');
		  nameForm.classList.remove('class_error');
		  nameForm.classList.add('class_success');
    };
    if(prceEmail.test(userEmail) === false) {
		  console.log('userEmail - Form false!');
		  emailForm.value = '';
		  emailForm.placeholder = 'Почта введена некорректно';
		  emailForm.classList.add('class_error');
    }
    else {
		  console.log('userEmail - Form true!');
		  emailForm.classList.remove('class_error');
		  emailForm.classList.add('class_success');
    };
	  if(userTel !== '') {
		  if(prceTel.test(userTel) === false) {
			  console.log('userTel - Form false!');
			  telForm.value = '';
			  telForm.placeholder = 'Телефон введён некорректно';
			  telForm.classList.add('class_error');
		  }
		  else {
		  console.log('userTel - Form true!');
		  telForm.classList.remove('class_error');
		  telForm.classList.add('class_success');
		  };
	  };
    
      if(userMessage === '') {
			  console.log('userMessage - Form false!');
			  //messageForm.value = '';
			  messageForm.placeholder = 'Вы ничего не написали';
			  messageForm.classList.add('class_error');
		  }
		  else {
		  console.log('userMessage - Form true!');
		  messageForm.classList.remove('class_error');
		  messageForm.classList.add('class_success');
		  };
	  
  });  
};
