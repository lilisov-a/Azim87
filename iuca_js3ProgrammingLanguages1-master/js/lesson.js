// ===================== Проверка номера Кыргызстан =====================
const kgPhoneInput = document.querySelector('#kg_phone_input');
const kgPhoneButton = document.querySelector('#kg_phone_button');
const kgPhoneResult = document.querySelector('#kg_phone_result');

// +996 550 64-47-72
const kgRegExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

kgPhoneButton.addEventListener('click', () => {
    if (kgRegExp.test(kgPhoneInput.value.trim())) {
        kgPhoneResult.innerHTML = '✅ Этот номер существует (Кыргызстан)';
        kgPhoneResult.style.color = 'green';
    } else {
        kgPhoneResult.innerHTML = '❌ Этот номер не существует';
        kgPhoneResult.style.color = 'red';
    }
});


// ===================== Проверка номера Россия =====================
const ruPhoneInput = document.querySelector('#ru_phone_input');
const ruPhoneButton = document.querySelector('#ru_phone_button');
const ruPhoneResult = document.querySelector('#ru_phone_result');

// +7XXXXXXXXXX или 8XXXXXXXXXX
const ruRegExp = /^(\+7|8)[0-9]{10}$/;

ruPhoneButton.addEventListener('click', () => {
    if (ruRegExp.test(ruPhoneInput.value.trim())) {
        ruPhoneResult.innerHTML = '✅ Этот номер существует (Россия)';
        ruPhoneResult.style.color = 'green';
    } else {
        ruPhoneResult.innerHTML = '❌ Этот номер не существует';
        ruPhoneResult.style.color = 'red';
    }
});


// ===================== TAB SLIDER (фото + описание) =====================
const tabs = document.querySelectorAll('.tab_item');
const contents = document.querySelectorAll('.tab_content_block');
let current = 0;

function showTab(index) {
    contents.forEach((c, i) => {
        c.classList.toggle('active', i === index);
    });
    tabs.forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
    current = index;
}

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        showTab(i);
        resetAutoSlide();
    });
});

// автопереключение каждые 4 секунды
let autoSlide = setInterval(() => {
    let next = (current + 1) % contents.length;
    showTab(next);
}, 4000);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        let next = (current + 1) % contents.length;
        showTab(next);
    }, 4000);
}
