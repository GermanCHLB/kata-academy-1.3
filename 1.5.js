const manufacturers = [
    {
        name: 'lenovo',
        src: 'img/lenovo.svg',
        alt: 'lenovo',
    },
    {
        name: 'samsung',
        src: 'img/samsung.svg',
        alt: 'samsung',
    },
    {
        name: 'apple',
        src: 'img/apple.svg',
        alt: 'apple',
    },
    {
        name: 'viewsonic',
        src: 'img/viewsonic.svg',
        alt: 'viewsonic',
    },
    {
        name: 'bosch',
        src: 'img/bosch.svg',
        alt: 'bosch',
    },
    {
        name: 'hp',
        src: 'img/hp.svg',
        alt: 'hp',
    },
    {
        name: 'acer',
        src: 'img/acer.svg',
        alt: 'acer',
    },
    {
        name: 'sony',
        src: 'img/sony.svg',
        alt: 'sony',
    },
    {
        name: 'hp',
        src: 'img/hp.svg',
        alt: 'hp',
    },
    {
        name: 'acer',
        src: 'img/acer.svg',
        alt: 'acer',
    },
    {
        name: 'sony',
        src: 'img/sony.svg',
        alt: 'sony',
    },
];

const container = document.querySelector('.manufacturers__container');
const main = document.querySelector('.manufacturers__main')

const width = window.innerWidth;
let opened = false;

const createItem = (id) => {
    const item = document.createElement('div');
    item.className="manufacturers__item";
    const a = document.createElement('a');
    a.href="#";
    const img = document.createElement('img');
    img.src = manufacturers[id].src;
    img.alt = manufacturers[id].alt;
    const btn = document.createElement('img');
    btn.src = "img/go.svg";
    btn.alt = "go";
    a.appendChild(img);
    a.appendChild(btn);
    item.appendChild(a);
    container.appendChild(item);
}

for (let i = 0; i < manufacturers.length; i += 1) {
    createItem(i)
}

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

closeBtn.remove();

openBtn.onclick = function () {
    container.classList.remove('manufacturers__container--closed');
    container.classList.add('manufacturers__container--opened');
    openBtn.remove();
    main.appendChild(closeBtn);
}

closeBtn.onclick = function () {
    container.classList.remove('manufacturers__container--opened');
    container.classList.add('manufacturers__container--closed');
    closeBtn.remove();
    main.appendChild(openBtn);
}