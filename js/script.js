import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modals from './modules/modals';
import slider from './modules/slider';
import timer from './modules/timer';
import {
    openModal
} from './modules/modals';


window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000); // вызывает мод окно через bynthdfk

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    cards();
    forms('form', modalTimerId);
    modals('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider',
        nexArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    timer('.timer', '2021-08-11');

});