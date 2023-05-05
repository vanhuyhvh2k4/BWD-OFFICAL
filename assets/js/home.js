document.addEventListener("DOMContentLoaded", () => {
    var mostSearchItems = document.querySelectorAll('.most_searched__item__up__info');
    var mostSearchItemsOverlay = document.querySelectorAll('.most_searched__item__up__overlay');
    var mostSearchedList = document.querySelector('.most_searched__list');
    var btnSeeMore = document.querySelector('.btn_see_more');
    var btnSeeLess = document.querySelector('.btn_see_less');

    btnSeeMore.addEventListener('click', () => {
        mostSearchedList.classList.add('see_full');
        btnSeeMore.setAttribute('hidden', true);
        btnSeeLess.removeAttribute('hidden', true);
    })

    btnSeeLess.addEventListener('click', () => {
        mostSearchedList.classList.remove('see_full');
        btnSeeLess.setAttribute('hidden', true);
        btnSeeMore.removeAttribute('hidden', true);
    })

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