import $ from "jquery";
import '../libs/parsley/parsley.min.js';


window.Parsley.addValidator('email', {
  requirementType: 'string',
  validateString: function(value) {
    if (typeof value !== 'string') return false;
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value.toLowerCase());
  },
  messages: {
    en: 'Enter a valid email address.',
    ru: 'В данном поле может быть только E-mail'
  }
});

window.Parsley.addValidator('requiredIfChecked', {
  requirementType: 'string',
  validateString: function (value, requirement) {
    const checkbox = document.querySelector(requirement);

    if (!checkbox) {
      return false;
    }

    return !(checkbox.checked && !value.trim());

  },
  messages: {
    en: 'Required field',
    ru: 'Обязательное поле'
  },
  priority: 33
});

window.Parsley.addValidator('phone', {
  requirementType: 'string',
  validateString: function (value) {
    if (typeof value !== 'string') return false;
    return /^(\+7|7|8)?[\s\-]?\(?[1-9]\d{2}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/.test(value);
  },
  messages: {
    en: 'Number field +7(9XX)XXX-XX-XX',
    ru: 'Формат 8(9XX)XXX-XX-XX'
  }
});

window.Parsley.addValidator('reqtext', {
  requirementType: 'string',
  validateString: function (value) {
    if (typeof value !== 'string') return false;
    return /^[А-Яа-яЁёA-Za-z]+$/.test(value);
  },
  messages: {
    en: 'Required field.',
    ru: 'Введите буквенное значение.'
  }
});

window.Parsley.addValidator('date', {
  requirementType: 'string',
  validateString: function (value) {
    if (typeof value !== 'string' || value.trim() === '') return false;
    return dayjs(value, 'DD.MM.YYYY', true).isValid();
  },
  messages: {
    en: 'Enter correct date',
    ru: 'Введите правильно дату'
  }
});

Parsley.addMessages('ru', {
  defaultMessage: 'Некорректное значение.',
  type: {
    email: 'В данном поле может быть только E-mail',
    url: 'Адрес сайта введен неверно.',
    number: 'Введите число.',
    integer: 'Введите целое число.',
    digits: 'Введите только цифры.',
    alphanum: 'Введите буквенно-цифровое значение.'
  },
  notblank: 'Это поле должно быть заполнено.',
  required: 'Поле не заполнено',
  pattern: 'Это значение некорректно.',
  min: 'Это значение должно быть не менее чем %s.',
  max: 'Это значение должно быть не более чем %s.',
  range: 'Это значение должно быть от %s до %s.',
  minlength: 'Это значение должно содержать не менее %s символов.',
  maxlength: 'Это значение должно содержать не более %s символов.',
  length: 'Это значение должно содержать от %s до %s символов.',
  mincheck: 'Выберите не менее %s значений.',
  maxcheck: 'Выберите не более %s значений.',
  check: 'Выберите от %s до %s значений.',
  equalto: 'Это значение должно совпадать.'
});

Parsley.setLocale('ru');

export default function validation() {
  const formsToValidate = document.querySelectorAll('form[data-need-validation]');
  formsToValidate.forEach((form) => {
    const parsleyInstance = $(form).parsley();
    form.addEventListener("submit", (e) => {
      if (!parsleyInstance.isValid()) {
        e.preventDefault();
        parsleyInstance.validate();
      }
    });
  });
}
