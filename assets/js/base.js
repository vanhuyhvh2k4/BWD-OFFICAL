import laptoplist from "./data.js";
document.addEventListener('DOMContentLoaded', () => {
        var searchInput = document.querySelector('.search_input');
        var searchPoppup = document.querySelector('.search_poppup');
        var compareModal = document.querySelector('.poppup_compare_modal');
        var btnCompares = document.querySelectorAll('.most_review__item__up_btn');
        var btnCloseCompare = document.querySelector('.btn_close');
        var btnSelect = document.querySelector('.btn_select');
        var poppupSelect = document.querySelector('.poppup_select');
        var btnPoppupClose = document.querySelector('.poppup_select_close');
        var poppupSelectItems = document.querySelectorAll('.poppup_select__item');
        var formItemPoppup = document.querySelector('.poppup_compare_form__item.dynamic');
        var formItemPoppupRoot = document.querySelector('.poppup_compare_form__item.root');

        console.log(formItemPoppup);

        searchInput.addEventListener('focus', () => {
            searchPoppup.style.display = 'block';
        });
        searchInput.addEventListener('blur', () => {
            searchPoppup.style.display = 'none';
        });

        btnCompares.forEach((item, index) => {
            item.addEventListener('click', () => {
                compareModal.removeAttribute('hidden');
                formItemPoppupRoot.innerHTML = `<div  class="poppup_compare_form__item__img">
                <img src="./assets/images/${laptoplist[index].imgUrl}.png" alt="">
            </div>
            <article class="poppup_compare_form__item__text">
                <div>
                    <img src="./assets/images/company.png" alt="">
                    <span>Company: </span>
                    <span>${laptoplist[index].company}</span>
                </div>
                <div>
                    <img src="./assets/images/name.png" alt="">
                    <span>Name: </span>
                    <span>${laptoplist[index].name}</span>
                </div>
                <div>
                    <img src="./assets/images/price-tag.png" alt="">
                    <span>Price: </span>
                    <span>${laptoplist[index].price}</span>
                </div>`;
            })
        });

        btnCloseCompare.addEventListener('click', () => {
            compareModal.setAttribute('hidden', 'true');
            location.reload(true);
        });

        btnSelect.addEventListener('click', () => {
            poppupSelect.removeAttribute('hidden', true);
            btnSelect.setAttribute('hidden', true)
        })

        btnPoppupClose.addEventListener('click', () => {
            btnSelect.removeAttribute('hidden', true)
            poppupSelect.setAttribute('hidden', true);
        })

        poppupSelectItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                formItemPoppup.innerHTML = `
                <div  class="poppup_compare_form__item__img">
                    <img src="./assets/images/${laptoplist[index].imgUrl}.png" alt="">
                </div>
                <article class="poppup_compare_form__item__text">
                    <div>
                        <img src="./assets/images/company.png" alt="">
                        <span>Company: </span>
                        <span>${laptoplist[index].company}</span>
                    </div>
                    <div>
                        <img src="./assets/images/name.png" alt="">
                        <span>Name: </span>
                        <span>${laptoplist[index].name}</span>
                    </div>
                    <div>
                        <img src="./assets/images/price-tag.png" alt="">
                        <span>Price: </span>
                        <span>${laptoplist[index].price}</span>
                    </div>
                    `;

            });
        })

    }, false);