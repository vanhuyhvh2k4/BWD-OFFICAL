import laptoplist from "./data.js";
document.addEventListener("DOMContentLoaded", () => {
    
    var mostSearchedList = document.querySelector('.most_searched__list');
    var btnSeeMore = document.querySelector('.btn_see_more');
    var btnSeeLess = document.querySelector('.btn_see_less');
    const arr = laptoplist.sort((a, b) => b.score - a.score);

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
    
    //render most searched items
    mostSearchedList.innerHTML = arr.slice(0, 6).map((item, index) => {
        return `<div class="col-lg-4">
                        <li class="most_searched__item">
                            <div class="most_searched__item__up">
                                <div class="most_searched__item__up__info">
                                    <section>
                                        <img src="./assets/images/${item.imgUrl}.png" alt="">
                                    </section>
                                    <section>
                                        <figure>
                                            <div>
                                                <img src="./assets/images/high-performance.png" alt="">
                                                <p>
                                                    <span>${item.rating_performance}</span>
                                                    <img class="star" src="./assets/images/star.png" alt="">
                                                </p>
                                            </div>
                                            <div>
                                                <img src="./assets/images/full-battery.png" alt="">
                                                <p>
                                                    <span>${item.rating_battery}</span>
                                                    <img class="star" src="./assets/images/star.png" alt="">
                                                </p>
                                            </div>
                                        </figure>
                                        <figure>
                                            <div>
                                                <img src="./assets/images/price-tag.png" alt="">
                                                <p>
                                                    <span>${item.rating_price}</span>
                                                    <img class="star" src="./assets/images/star.png" alt="">
                                                </p>
                                            </div>
                                            <div>
                                                <img src="./assets/images/rating.png" alt="">
                                                <p>
                                                    <span>${item.rating}</span>
                                                    <img class="star" src="./assets/images/star.png" alt="">
                                                </p>
                                            </div>
                                        </figure>

                                    </section>
                                </div>
                                <h1>
                                    ${index <= 2 ? `<img src="./assets/images/${(index === 0 && `gold`) || (index === 1 && 'silver') || (index === 2 && `bronze`)}-medal.png" alt=""></img>` : ''}
                                    MacBook Pro (M1 chip)
                                </h1>
                                <div class="most_searched__item__up__overlay">
                                    <section>
                                        <img src="./assets/images/company.png" alt="">
                                        <span>Company: </span>
                                        <span>${item.company}</span>
                                    </section>
                                    <section>
                                        <img src="./assets/images/name.png" alt="">
                                        <span>Name: </span>
                                        <span>${item.name}</span>
                                    </section>
                                    <section>
                                        <img src="./assets/images/screen.png" alt="">
                                        <span>Screen: </span>
                                        <span>${item.resolution} px</span>
                                    </section>
                                    <section>
                                        <img src="./assets/images/chip.png" alt="">
                                        <span>Chip: </span>
                                        <span>${item.chip}</span>
                                    </section>
                                    <section>
                                        <img src="./assets/images/graphic-card.png" alt="">
                                        <span>Graphic Card: </span>
                                        <span>${item.graphic}</span>
                                    </section>
                                    <section>
                                        <img src="./assets/images/memory.png" alt="">
                                        <span>Hard Disk: </span>
                                        <span>${item.disk} Gb</span>
                                    </section>
                                    <section>
                                        <img src="./assets/images/ram.png" alt="">
                                        <span>RAM: </span>
                                        <span>${item.ram} Gb</span>
                                    </section>
                                    <section>
                                        <img src="./assets/images/fan.png" alt="">
                                        <span>Fan: </span>
                                        <span>Macbook Pro</span>
                                    </section>
                                    <section>
                                        <img src="./assets/images/full-battery.png" alt="">
                                        <span>Battery: </span>
                                        <span>${item.battery} mAh</span>
                                    </section>
                                    <section>
                                        <img src="./assets/images/price-tag.png" alt="">
                                        <span>Price: </span>
                                        <span>$${(item.store_price.sort((a, b) => a.price - b.price))[0].price} ~ $${(item.store_price.sort((a, b) => a.price - b.price))[item.store_price.length - 1].price}</span>
                                    </section>
                                </div>
                            </div>
                            <button class="most_searched__item__down">
                                <img class="details" src="./assets/images/details.png" alt="">
                                Details
                            </button>
                        </li>
                    </div>`
    }).join('');
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
    });
}, false)