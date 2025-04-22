document.getElementById('productOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const userName = document.getElementById('user_name_product').value.trim();
    const userEmail = document.getElementById('user_email_product').value.trim();
    const serviceDate = document.getElementById('service_date').value;
    const deliveryAddress = document.getElementById('delivery_address').value.trim();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('dateError').textContent = '';
    document.getElementById('addressError').textContent = '';

    
    if (userName.length < 3) {
        document.getElementById('nameError').textContent = 'Введите имя минимум 3 символа.';
        isValid = false;
    }
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(userEmail)) {
        document.getElementById('emailError').textContent = 'Введите корректный E-mail.';
        isValid = false;
    }

    
    if (!serviceDate) {
        document.getElementById('dateError').textContent = 'Выберите дату услуги.';
        isValid = false;
    }

    
    if (deliveryAddress.length < 7) {
        document.getElementById('addressError').textContent = 'Введите адрес доставки минимум 7 символов.';
        isValid = false;
    }

    if (isValid) {
        
        alert(`Данные заказа
            Имя: ${userName}
            E-mail: ${userEmail}
            Дата: ${serviceDate}
            Адрес доставки: ${deliveryAddress}`);
    }
});

const headerTitle = document.querySelector('.offer__title');
headerTitle.addEventListener('click', function() {
   
    headerTitle.style.color = 'purple';
});


const learnMoreButton = document.querySelector('.button');
learnMoreButton.addEventListener('mouseover', function() {
    learnMoreButton.style.opacity = '0';
    learnMoreButton.style.transition = 'opacity 0.5s ease';
});

learnMoreButton.addEventListener('mouseout', function() {
    learnMoreButton.style.opacity = '1';
});