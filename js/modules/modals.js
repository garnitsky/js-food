function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // не дает скролить страницу

    if (modalTimerId) {
        clearInterval(modalTimerId); //не даем мод окну выскакивать постоянно
    }

}

function closeModal(modalSelector) { //функция перебирает кнопки и добавляет и скрывает классы
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; //дает скроллить страницу
}

function modals(triggerSelector, modalSelector, modalTimerId) {

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));

    });

    modal.addEventListener('click', (e) => { //закрытие мод окна в любом месте
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => { //закрывает мод окно по эскейп
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });



    window.addEventListener('scroll', showModalByScroll);

}

export default modals;
export {
    openModal
};
export {
    closeModal
};