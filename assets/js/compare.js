document.addEventListener("DOMContentLoaded", () => {
    var commendBtns = document.querySelectorAll('.recommend__chart__btn');

    commendBtns.forEach((item, index) => {
        item.addEventListener('click', () => {
            commendBtns.forEach(item => {
                item.classList.remove('active');
            })
            item.classList.add('active');
        });
    });
}, false)