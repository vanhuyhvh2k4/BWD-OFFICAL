document.addEventListener("DOMContentLoaded", () => {
    var mostSearchItems = document.querySelectorAll('.most_searched__item__up__info');
    var mostSearchItemsOverlay = document.querySelectorAll('.most_searched__item__up__overlay');

    mostSearchItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            mostSearchItemsOverlay[index].classList.add('display_block');
            mostSearchItemsOverlay[index].classList.remove('hide');
            mostSearchItemsOverlay[index].classList.add('appear')
        });
    });

    mostSearchItemsOverlay.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.remove('appear');
            item.classList.add('hide');
        });
    })
}, false)