document.addEventListener("DOMContentLoaded", (event) => {
  const openModal = (dataText) => {
    const button = document.createElement("button");
    button.classList.add('visually-hidden');

    button.dataset.path = dataText;
    document.body.append(button);
    button.click();
    button.remove();
  }

  window.openModal = openModal;
});

// openModal("modal-schedule") - открывается попап "Скачать график"
// openModal("modal-demo") - открывается попап с "демо-день"
// openModal("modal-online") - открывается попап с "онлайн-экскурсия"
// openModal("modal-partner") - открывается попап с "Стать партнером"
// openModal("modal-calculation") - открывается попап с "Заказать  расчет"
// openModal("modal-leasing") - открывается попап с "Узнать про лизинг"
// openModal("modal-event") - открывается попап с "Зарегистрироваться на событие"
// openModal("modal-package") - открывается попап с "Скачать пакет"
// openModal("modal-download") - открывается попап успешно со ссылкой
// openModal("modal-success") - открывается попап успешно без ссылки
