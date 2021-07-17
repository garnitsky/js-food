function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() { //создаем функцию скрывающую табы и класс активности
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade'); //скрываем все табы
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass); //удаляем класс активности у табхедера
        });
    }

    function showTabContent(i = 0) { //создаем функцию показывающую табы и добавляющую класс активности с индексом i
        tabsContent[i].classList.add('show', 'fade'); //показываем таб
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass); //добавляем класс активности табхедерам
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => { //создаем обработчик событий следящий за кликами по меню
        const target = event.target; //сразу из ивенттаргета делаем константу так как он может часто использоваться 

        if (target && target.classList.contains(tabsSelector.slice(1))) { //табхедерайтемы что кликнули именно в него 
            tabs.forEach((item, i) => { //перебираем табы
                if (target == item) { //если клик совпадает с табом то мы вызываем функции скрытия все и показа одного
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });
}

export default tabs;