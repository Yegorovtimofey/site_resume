let contactsButton = document.querySelector('.contacts__button')
contactsButton.setAttribute('onclick', 'showMessengers()')

let contactsLink = document.querySelector('.contact__link')

let messengerRow = document.querySelector('.messenger__row')



// Показать иконки мессенджеров при клике
function showMessengers() {
    if (!messengerRow.classList.contains('active')){
        messengerRow.classList.toggle('active')
        contactsLink.textContent = 'Back';

    }else {
        messengerRow.classList.toggle('active')
        contactsLink.textContent = 'Contact me';
    }
}


// Меню бургер
const iconMenu = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu');
if (iconMenu){
    iconMenu.addEventListener('click', function (e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('menu__active');
        menu.classList.toggle('menu__active')
    })

}




// Плавная прокрутка якорей
let anchors = document.querySelectorAll('header a[href*="#"]')

for(let anchor of anchors){
    if(anchor){
        anchor.addEventListener('click', function (e){
            e.preventDefault()
            let anchorId = this.getAttribute('href')
            if(anchorId === '#home'){
                location.reload()
            } else{

                if(iconMenu.classList.contains('menu__active')){
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('menu__active');
                    menu.classList.remove('menu__active')

                }
                document.querySelector(anchorId).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
        })
    }
}



// Check if user from mobile
const isMobile = {
    Android: function (){
        return navigator.userAgent.match(/Android/i);
    },

    BlackBerry: function (){
        return navigator.userAgent.match(/BlackBerry/i);
    },

    IOS: function (){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },

    Opera: function (){
        return navigator.userAgent.match(/Opera mini/i);
    },

    Windows: function (){
        return navigator.userAgent.match(/IEMobile/i);
    },

    any: function (){
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows())
    }
}

if (isMobile.any()){
    document.body.classList.add('_touch')
}else {
    document.body.classList.add('_pc')
}




