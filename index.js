const names = document.getElementsByClassName('list-item__name');
const image = document.getElementById('image');
const bButton = document.getElementById('B');
const gButton = document.getElementById('G');
const tButton = document.getElementById('T');
const kButton = document.getElementById('K');
const modal = document.getElementById('modal-window');
const background = document.getElementById('modal-background');
const closeButton = document.getElementById('header-button');

const blockLinks = document.getElementById('links');
const modalImage = document.getElementById('modal-image');
const modalHeader = document.getElementById('modal-header');

const listener = (e) => {
    const name = e.target.innerText;
    image.setAttribute("src", `./assets/people/${name}.jpg`);
    image.setAttribute("alt", `${name}`);
    image.classList.add('appear');
}

const clearImage = () => {
    image.classList.remove('appear');
}

const onButtonClick = (e) => {
    let links = [];
    switch (e.target.innerText) {
        case 'Б':
            links = [{name: 'Холл', floor: '1 этаж', link: 'https://my.matterport.com/show/?m=K43AbN7xp38'},
                {name: 'Библиотека', floor: '1 этаж', link: 'https://my.matterport.com/show/?m=j8a4mPrS9pP'},
                {name: 'Пространство для отдыха', floor: '2 этаж', link: 'https://my.matterport.com/show/?m=aFCajP7PubL'},
                {name: 'Управление университета', floor: '6 этаж', link: 'https://my.matterport.com/show/?m=yUKjFEwu5ZG'},
                {name: 'Зона Mail group', floor: '8 этаж', link: 'https://my.matterport.com/show/?m=gLASxJF879K'}];
            break;
        case 'Г':
            links = [{name: 'Аутентичная лестница', floor: '1-2 этажи', link: 'https://my.matterport.com/show/?m=9z8zfTMLRsq&sr=-1.68%2C-1.05&ss=9&tag=20f6Y8Mw8CJ&pin-pos=1.89%2C.45%2C-7.27#'},
                {name: 'Студенческий офис', floor: '2 этаж', link: 'https://my.matterport.com/show/?m=9z8zfTMLRsq'},
                {name: 'Музей минералов', floor: '2 этаж', link: 'https://my.matterport.com/show/?m=uGrS6bULyzp'},
                {name: 'Переход в корпус А', floor: '2 этаж', link: 'https://my.matterport.com/show/?m=wkMEjDw2kd4'},
                {name: 'Переход в корпус С', floor: '2-3 этажи', link: 'https://my.matterport.com/show/?m=LMeqCz9MNML'}];
            break;
        case 'Т':
            links = [{name: 'Лаборатория', floor: '2 этаж', link: 'https://my.matterport.com/show/?m=gHJVy6FpHeN'}];
            break;
        case 'К':
            links = [{name: 'Холл', floor: '1 этаж', link: 'https://my.matterport.com/show/?m=zoc7BTrkD8o'}];
            break;
    }
    let htmlLinks = '';
    links.forEach(({name, floor, link}) => {
        htmlLinks += `<div class="modal-window-link">
                            <div class="link__name p">${name}</div>
                            <div class="link__floor p" >${floor}</div>
                            <a class="link__link" href="${link}">🡭</a>
                        </div>`
    });
    blockLinks.innerHTML = htmlLinks;
    modalHeader.innerHTML = `${e.target.innerText} корпус`;
    modalImage.setAttribute('src', `./assets/corpus/${e.target.innerText} корпус.png`);
    modalImage.setAttribute('alt', `${e.target.innerText} корпус`);
    modal.classList.remove('hidden');
    background.classList.remove('hidden');
    document.body.style.overflow = "hidden";
}

const hideModal = () => {
    modal.classList.add('hidden');
    background.classList.add('hidden');
    document.body.style.overflow = "auto";
}

for (let item of names) {
    item.addEventListener("mouseenter", (e) => listener(e));
    item.addEventListener("mouseleave", clearImage);
}

bButton.addEventListener('click', (e) => onButtonClick(e));
gButton.addEventListener('click', (e) => onButtonClick(e));
tButton.addEventListener('click', (e) => onButtonClick(e));
kButton.addEventListener('click', (e) => onButtonClick(e));
background.addEventListener("click", hideModal);
closeButton.addEventListener("click", hideModal);
