const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

// Слушаем клики по миниатюрам
thumbnails.forEach(thumbnail => {
	thumbnail.addEventListener('click', function () {
		// Удаляем активный класс у всех миниатюр
		thumbnails.forEach(img => img.classList.remove('active'));
		// Добавляем активный класс к выбранной миниатюре
		this.classList.add('active');
		// Изменяем изображение в крупном блоке
		mainImage.src = this.src;
	});
});

document.addEventListener("DOMContentLoaded", function () {
	// Скрыть все блоки с билетами и датами при загрузке
	const ticketsSection = document.querySelector('.tickets');
	const datesSection = document.querySelector('.dates');

	ticketsSection.style.display = 'none';
	datesSection.style.display = 'none';

	// Функция для показа билетов и скрытия остальных разделов
	function showTicketsSection() {
		// Скрыть все остальные секции
		const sections = document.querySelectorAll('.video-background, .banner, .services, .dates');
		sections.forEach(section => section.style.display = 'none');

		// Показать билеты
		ticketsSection.style.display = 'block';
	}

	// Обработчик для кнопок 'Купить билет' в баннере и сервисах
	const bannerBtn = document.querySelector('.banner__btn');
	const servicesBtns = document.querySelectorAll('.services__btn');
	const priceBtns = document.querySelectorAll('.price__button'); // Добавляем обработчики для price__button

	if (bannerBtn) {
		bannerBtn.addEventListener('click', showTicketsSection);
	}

	if (servicesBtns) {
		servicesBtns.forEach(btn => btn.addEventListener('click', showTicketsSection));
	}

	// Добавляем обработчики для кнопок с классом price__button
	if (priceBtns) {
		priceBtns.forEach(btn => btn.addEventListener('click', showTicketsSection));
	}

	// Логика изменения числа билетов
	const ticketValues = document.querySelectorAll('.tickets__value');

	ticketValues.forEach(ticketValue => {
		const ticketBtn = ticketValue.querySelector('.tickets__btn button');

		if (ticketBtn) {
			let count = 0;
			ticketBtn.addEventListener('click', function () {
				count++;
				// Обновляем число билетов
				const valueDisplay = ticketValue.querySelector('input');
				valueDisplay.value = count;

				// Показать сообщение
				alert("Информация отправлена, ждите звонка");
			});
		}
	});
});
