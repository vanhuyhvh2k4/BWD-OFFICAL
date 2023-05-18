import laptoplist from "./data.js";
document.addEventListener('DOMContentLoaded', () => {

        var mostReviewList = document.querySelector('.most_review__list');
        const arr = laptoplist.sort((a, b) => b.score - a.score);
        

        mostReviewList.innerHTML = arr.map((item, index) => {
            return `<li class="col-lg-3 most_review__item">
                        <div class="most_review__item_inner">
                            <section class="most_review__item__img">
                                <img src="./assets/images/${item.imgUrl}.png" alt="">
                                <img class="most_review__item_inner__logo" src="./assets/images/${item.logo}.png" alt="">
                                ${index <=2 ? `<img class="most_review__item_inner__medal" src="./assets/images/${(index === 0 && `gold`) || (index === 1 && `silver`) || (index === 2 && `bronze`)}-medal.png" alt="">`: ``}
                            </section>
                            <article class="most_review__item__text">
                                <section>
                                    <img src="./assets/images/name.png" alt="">
                                    <span>Name: </span>
                                    <span>${item.name}</span>
                                </section>
                                <section>
                                    <img src="./assets/images/price-tag.png" alt="">
                                    <span>Price: </span>
                                    <span>$${(item.store_price.sort((a, b) => a.price - b.price))[0].price} ~ $${(item.store_price.sort((a, b) => a.price - b.price))[item.store_price.length - 1].price}</span>
                                </section>
                                <section>
                                    <img src="./assets/images/rating.png" alt="">
                                    <span>Rating: </span>
                                    <span>${item.num_of_rating}</span>
                                </section>
                            </article>
                            <div class="most_review__item__btn">
                                <button>
                                    <img src="./assets/images/details.png" alt="">
                                    <span>Details</span>
                                </button>
                                <button class="most_review__item__up_btn">
                                    <img src="./assets/images/compare_btn.png" alt="">
                                    <span>Compare</span>
                                </button>
                            </div>
                        </div>
                    </li>`
        }).join('');

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
        var compareBtn = document.querySelector('.compare_btn');
        var rootItem;
        var dynamicItem;

        compareBtn.addEventListener('click', () => {
            sessionStorage.setItem('root', rootItem);
            sessionStorage.setItem('dynamic', dynamicItem);
            window.location.assign("../compare.html");
        })

        searchInput.addEventListener('focus', () => {
            searchPoppup.style.display = 'block';
        });
        searchInput.addEventListener('blur', () => {
            searchPoppup.style.display = 'none';
        });
        // root item
        btnCompares.forEach((item, index) => {
            item.addEventListener('click', () => {
                rootItem = index;
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
                dynamicItem = index;
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